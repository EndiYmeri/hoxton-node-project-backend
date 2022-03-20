import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import 'dotenv/config'

const app = express()
app.use(cors())
app.use(express.json())

const PORT = 4000

const prisma = new PrismaClient({ log: ['warn', 'error', 'info', 'query'] })


// secretVariable = "nosecretshere"

function createToken(id: number) {
    //@ts-ignore
    const token = jwt.sign({ id }, process.env.secretVariable)
    return token
}

async function getUserFromToken(token: string) {
    //@ts-ignore
    const userId = jwt.verify(token, process.env.secretVariable)
    //@ts-ignore
    const user = await prisma.user.findUnique({ where: { id: userId.id } })
    return user;
}

app.post('/users', async (req, res) => {
    const { email, firstName, lastName, password, bio = "" } = req.body
    try {

        const hash = bcrypt.hashSync(password, 8)
        const user = await prisma.user.create({
            data: {
                email, firstName, lastName, password: hash, bio
            }
        })
        if (user) {
            const token = createToken(user.id)
            res.send({ user, token })
        } else throw Error("User already exists")
    } catch (err) {
        // @ts-ignore
        res.send({ error: err.message })
    }

})

app.post('/login', async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await prisma.user.findUnique({
            where: { email },
            include: {
                articles: true
            }

        })
        if (user) {
            const token = createToken(user.id)
            const passwordMatches = bcrypt.compareSync(password, user.password)
            if (passwordMatches) {
                res.status(200).send({ user, token })
            } else {
                throw Error('Password does not match')
            }
        } else {
            res.status(404).send({ error: 'User not found!' })
        }
    }
    catch (err) {
        //@ts-ignore
        res.status(400).send({ error: err.message })
    }
})

app.get('/validate', async (req, res) => {
    const token = req.headers.authorization || ''
    try {

        const user = await getUserFromToken(token)
        if (user) {
            res.status(200).send(user)
        } else {
            res.status(404).send({ error: 'Token invalid' })
        }

    } catch (err) {
        //@ts-ignore
        res.status(400).send({ error: err.message })
    }

})

app.post('/article', async (req, res) => {
    const token = req.headers.authorization || ''
    const { title, image, intro, content, createdAt, categories } = req.body
    try {
        const user = await getUserFromToken(token)
        if (!user) {
            res.status(400).send({ error: 'Invalid token' })
        } else {
            const newArticle = await prisma.article.create({
                data: {
                    title,
                    image,
                    intro,
                    content,
                    userId: user.id,
                    createdAt,
                    categories: {
                        connect: categories.map((category: any) => ({
                            name: category.name
                        }))
                    }
                }
            })
            res.status(200).send(newArticle)
        }
    } catch (err) {
        //@ts-ignore
        res.status(400).send(`<pre>${err.message}</pre>`)
        // res.status(400).send({ error: err.message })
    }

})

app.listen(PORT, () => console.log(`Server up on http://localhost:${PORT}`))
