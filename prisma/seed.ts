import { Prisma, PrismaClient } from "@prisma/client";
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient({ log: ['warn', 'error', 'info', 'query'] })

const users: Prisma.UserCreateInput[] = [
    {
        "email": "arita@email.com",
        "username": "arita",
        "password": bcrypt.hashSync('arita', 8),
        "firstName": "Arita",
        "lastName": "Osmani"
    },
    {
        "email": "endi@email.com",
        "username": "endi",
        "password": bcrypt.hashSync('endi', 8),
        "firstName": "Endi",
        "lastName": "Ymeri"
    },
    {
        "email": "markham@email.com",
        "username": "markham",
        "password": bcrypt.hashSync('markham', 8),
        "firstName": "Markham",
        "lastName": "Heid",
        "avatarImage": "https://miro.medium.com/fit/c/110/110/1*DzkledvGHgi69C3rDmnIJg.jpeg",
        "bio": "I write about health, science, and psychology."
    },
    {
        "email": "dan@email.com",
        "username": "dan",
        "password": bcrypt.hashSync('dan', 8),
        "firstName": "Dan",
        "lastName": "Kadlec",
        "avatarImage": "https://miro.medium.com/fit/c/110/110/0*v6o5eyiPWq_Aw64q",
        "bio": "Dan is writing a memoir about his early years as a small-town journalist."
    },
    {
        "email": "eve@email.com",
        "username": "eve",
        "password": bcrypt.hashSync('eve', 8),
        "firstName": "Eve",
        "lastName": "Peyser",
        "avatarImage": "https://miro.medium.com/fit/c/110/110/2*3Z0bNHG8GfYzxOFMqjVYGg.jpeg",
        "bio": "NYC native living in reno. read my writing in the new york times, nymag, vice, and more."
    },
    {
        "email": "karla@email.com",
        "username": "karla",
        "password": bcrypt.hashSync('karla', 8),
        "firstName": "Karla",
        "lastName": "Starr",
        "avatarImage": "https://miro.medium.com/fit/c/110/110/1*g1HCg7mT-dGwU0-B7ut-Nw@2x.jpeg",
        "bio": "Sustainable work-life stuff. Sanity. Everything we know about behavior & self-development is wrong."
    },
    {
        "email": "dennis@email.com",
        "username": "dennis",
        "password": bcrypt.hashSync('dennis', 8),
        "firstName": "Dennis",
        "lastName": "Sanders",
        "avatarImage": "https://miro.medium.com/fit/c/110/110/0*JgkfRbgBbCd1qMX0.jpg",
        "bio": "Middle-aged Midwesterner. I write about religion, politics and culture."
    },
]

const categories = [
    {
        name: 'Travel'
    },
    {
        name: 'Sport'
    },
    {
        name: 'Business'
    },
    {
        name: 'Lifestyle'
    },
    {
        name: 'Health'
    },
    {
        name: 'Politics'
    }
]

const articles: Prisma.ArticleCreateInput[] = [
    {
        title: 'Your most unhappy customers are your greatest source of learning.',
        image: 'https://preview.colorlib.com/theme/magdesign/images/ximg_2.jpg.pagespeed.ic.fbbBEgB1Q6.webp',
        intro: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
        content: '{"blocks":[{"key":"7bin3","text":"LOREM IPSUM AND STUFF","type":"header-one","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{"text-align":"center"}}],"entityMap":{}}',
        author: { connect: { email: "arita@email.com" } },
        categories: { connect: [{ name: 'Business' }] }
    },
    {
        title: 'I Love My Country. But Let\'s Not Kid Ourselves.',
        image: 'https://miro.medium.com/max/875/1*nNt0U68Id3XZJlnVJSLF3A.jpeg',
        intro: 'America is a great country. But the US Capitol Insurrection is part of a long, dark, racial history in the United States.',
        content: '{"blocks":[{"key":"7bin3","text":"LOREM IPSUM AND STUFF","type":"header-one","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{"text-align":"center"}}],"entityMap":{}}',
        author: { connect: { email: "dennis@email.com" } },
        categories: { connect: [{ name: 'Politics' }] }
    },
    {
        title: 'Why You Should Spend Time Walking Barefoot Every Day',
        image: 'https://miro.medium.com/max/875/0*r8cy5XrGbHQVeHZt',
        intro: 'Walking barefoot or in minimalist shoes can prevent multiple health problems.',
        content: '{"blocks":[{"key":"7bin3","text":"LOREM IPSUM AND STUFF","type":"header-one","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{"text-align":"center"}}],"entityMap":{}}',
        author: { connect: { email: "markham@email.com" } },
        categories: { connect: [{ name: 'Health' }, { name: 'Lifestyle' }] }
    },
    {
        title: 'What the "Happiness Paradox" Can Teach Us About Our Feelings',
        image: 'https://miro.medium.com/max/875/0*ZvpQh97OYDsPAoTE',
        intro: 'Paying too much attention to your emotional state can make you miserable.',
        content: '{"blocks":[{"key":"7bin3","text":"LOREM IPSUM AND STUFF","type":"header-one","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{"text-align":"center"}}],"entityMap":{}}',
        author: { connect: { email: "markham@email.com" } },
        categories: { connect: [{ name: 'Health' }] }
    },
    {
        title: 'Why Your Brain Needs Boundaries',
        image: 'https://miro.medium.com/max/875/0*w92KN-nJyLnIrvso',
        intro: 'And how modern life is ripping them down.',
        content: '{"blocks":[{"key":"7bin3","text":"LOREM IPSUM AND STUFF","type":"header-one","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{"text-align":"center"}}],"entityMap":{}}',
        author: { connect: { email: "markham@email.com" } },
        categories: { connect: [{ name: 'Health' }] }
    },
    {
        title: 'Bumping Into Russians.',
        image: 'https://miro.medium.com/max/875/1*9S1G_GFeNQ-iZHs49P-PDQ.jpeg',
        intro: 'At the airport. In the lobby. Suddenly I\'m hearing Russian conversations all around me during my stay in Dubai, giving the war, for me, a new dimension.',
        content: '{"blocks":[{"key":"7bin3","text":"LOREM IPSUM AND STUFF","type":"header-one","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{"text-align":"center"}}],"entityMap":{}}',
        author: { connect: { email: "dan@email.com" } },
        categories: { connect: [{ name: 'Politics' }, { name: 'Travel' }] }
    },
    {
        title: 'How I Became the Ultimate Influencer',
        image: 'https://miro.medium.com/max/875/0*6VQ3VdbXaoMP7tRh',
        intro: 'I didn\'t even have to embarrass myself on social media to get there!',
        content: '{"blocks":[{"key":"7bin3","text":"LOREM IPSUM AND STUFF","type":"header-one","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{"text-align":"center"}}],"entityMap":{}}',
        author: { connect: { email: "eve@email.com" } },
        categories: { connect: [{ name: 'Lifestyle' }, { name: 'Business' }] }
    },
    {
        title: 'Why Doing Things Over and Over Won\'t Make You Better',
        image: 'https://preview.colorlib.com/theme/magdesign/images/ximg_2.jpg.pagespeed.ic.fbbBEgB1Q6.webp',
        intro: 'We\'re Missing the Point of That Stupid Clay Pot Story.',
        content: '{"blocks":[{"key":"7bin3","text":"LOREM IPSUM AND STUFF","type":"header-one","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{"text-align":"center"}}],"entityMap":{}}',
        author: { connect: { email: "karla@email.com" } },
        categories: { connect: [{ name: 'Lifestyle' }] }
    },
    {
        title: 'Self-Improvement Has Become An Extreme Sport — It Doesn\'t Have To Be.',
        image: 'https://miro.medium.com/max/875/1*FwHXc1uvqhwsEeIkxmpZQw.jpeg',
        intro: 'What we\'re told we must do each day to develop and be successful has gone out of control. We have endless lists of habits that we\'re supposed to do.',
        content: '{"blocks":[{"key":"7bin3","text":"LOREM IPSUM AND STUFF","type":"header-one","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{"text-align":"center"}}],"entityMap":{}}',
        author: { connect: { email: "endi@email.com" } },
        categories: { connect: [{ name: 'Sport' }] }
    },
    {
        title: 'Design And Creativity Is Top-Class Sport.',
        image: 'https://miro.medium.com/max/875/1*mzaE8-mySDSSGwwXWiXz7w.jpeg',
        intro: 'What separates a designer from other people? All the design-thinking-two-day-boot-camps, visualization-in-a-day-workshops and design-sprint-weeks might lead to the impression that everyone can design.',
        content: '{"blocks":[{"key":"7bin3","text":"LOREM IPSUM AND STUFF","type":"header-one","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{"text-align":"center"}}],"entityMap":{}}',
        author: { connect: { email: "arita@email.com" } },
        categories: { connect: [{ name: 'Sport' }] }
    },
]

const likes: Prisma.LikeCreateInput[] = [
    {
        article: { connect: { id: 2 } },
        user: { connect: { email: "arita@email.com" } }
    },
    {
        article: { connect: { id: 2 } },
        user: { connect: { email: "endi@email.com" } }
    },
    {
        article: { connect: { id: 2 } },
        user: { connect: { email: "karla@email.com" } }
    },
    {
        article: { connect: { id: 2 } },
        user: { connect: { email: "eve@email.com" } }
    },
    {
        article: { connect: { id: 2 } },
        user: { connect: { email: "dan@email.com" } }
    },
    {
        article: { connect: { id: 3 } },
        user: { connect: { email: "arita@email.com" } }
    },
    {
        article: { connect: { id: 3 } },
        user: { connect: { email: "karla@email.com" } }
    },
    {
        article: { connect: { id: 3 } },
        user: { connect: { email: "endi@email.com" } }
    },
    {
        article: { connect: { id: 3 } },
        user: { connect: { email: "eve@email.com" } }
    },
    {
        article: { connect: { id: 3 } },
        user: { connect: { email: "dennis@email.com" } }
    },
    {
        article: { connect: { id: 4 } },
        user: { connect: { email: "arita@email.com" } }
    },
    {
        article: { connect: { id: 4 } },
        user: { connect: { email: "endi@email.com" } }
    },
    {
        article: { connect: { id: 4 } },
        user: { connect: { email: "eve@email.com" } }
    },
    {
        article: { connect: { id: 4 } },
        user: { connect: { email: "karla@email.com" } }
    },
    {
        article: { connect: { id: 4 } },
        user: { connect: { email: "dan@email.com" } }
    },
]

async function createStuff() {
    for (const user of users) {
        await prisma.user.create({ data: user })
    }

    for (const category of categories) {
        await prisma.category.create({ data: category })
    }

    for (const article of articles) {
        await prisma.article.create({
            data: article
        })
    }
    for (const like of likes) {
        await prisma.like.create({ data: like })
    }
}

createStuff()