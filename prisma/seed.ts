import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({log:['warn','error','info','query']})

const users: Prisma.UserCreateInput[] = [
    {
        "email": "arita@email.com",
        "password": "password",
        "firstName": "Arita",
        "lastName": "Osmani"
    },
    {
        "email": "endi@email.com",
        "password": "password",
        "firstName": "Endi",
        "lastName": "Ymeri"
    },
]

const categories  = [
    {
        name:'Travel'
    },
    {
        name:'Sport'
    },
    {
        name:'Business'
    },
    {
        name:'Lifestyle'
    },
    {
        name:'Health'
    },
    {
        name:'Politics'
    }
]

const articles:Prisma.ArticleCreateInput[] = [
    {
        title:'Your most unhappy customers are your greatest source of learning.',
        image:'https://preview.colorlib.com/theme/magdesign/images/ximg_2.jpg.pagespeed.ic.fbbBEgB1Q6.webp',
        intro:'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
        content:'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.',
        author: {connect:{email:"arita@email.com"}},
        createdAt:"2022-03-19T22:00:30.158Z",
        // categories:{connect:[{name:'Business'},{}]}
    }
 
]

 async function createStuff(){
    for(const user of users){
        await prisma.user.create({data:user})
    }

    for(const category of categories){
        await prisma.category.create({data:category})
    }

    for(const article of articles){
        await prisma.article.create({
            data: article
        })
    }
}

createStuff()