import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import 'dotenv/config'

const app = express()
app.use(cors())
const PORT = 4000

const prisma = new PrismaClient({log:['warn','error','info','query']})


// secretVariable = "nosecretshere"

function createToken(id:number){
    //@ts-ignore
    const token = jwt.sign({id},process.env.secretVariable)
    return token
}

app.post('/users',async (req,res) => {
    const {email, firstName, lastName, password, bio = "" } = req.body
    try{

        const hash = bcrypt.hashSync(password, 8)
        const user = await prisma.user.create({
            data:{
                email, firstName, lastName, password : hash, bio 
            }
        })
        if(user){
            const token = createToken(user.id)
            res.send({user, token})
        }else throw Error("User already exists")
    }catch(err){
        res.send({error: err.message})
    }
    

})

app.post('/login', async (req,res)=>{
    const {email, password} = req.body
    try{
        const user = await prisma.user.findUnique({where:email})
        if(user){
            const token = createToken(user.id)
            const passwordMatches = bcrypt.compareSync(password,user.password)
            if(passwordMatches){
                res.status(200).send({user,token})
            }else{
                throw Error('Password does not match')
            }
        }else{
            res.status(404).send({error:'User not found!'})
        }
    }
    catch(err){
        //@ts-ignore
        res.status(400).send({error:'User/password invalid'})
    }
})


app.listen(PORT, ()=>console.log(`Server up on https://localhost:${PORT}`))
