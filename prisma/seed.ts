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
        content: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.',
        author: { connect: { email: "arita@email.com" } },
        categories: { connect: [{ name: 'Business' }] }
    },
    {
        title: 'I Love My Country. But Let\'s Not Kid Ourselves.',
        image: 'https://miro.medium.com/max/875/1*nNt0U68Id3XZJlnVJSLF3A.jpeg',
        intro: 'America is a great country. But the US Capitol Insurrection is part of a long, dark, racial history in the United States.',
        content: 'President-elect Joe Biden said these words in the aftermath of Wednesday\'s assault on the US Capitol. Politicians like to say this during events like this. I believe that President-elect Biden and others who use that phrase mean nothing but good. They want to say that as Americans we aspire to higher goals and that what happened is something that is uncharacteristic of who we are as Americans.',
        author: { connect: { email: "dennis@email.com" } },
        categories: { connect: [{ name: 'Politics' }] }
    },
    {
        title: 'Why You Should Spend Time Walking Barefoot Every Day',
        image: 'https://miro.medium.com/max/875/0*r8cy5XrGbHQVeHZt',
        intro: 'Walking barefoot or in minimalist shoes can prevent multiple health problems.',
        content: 'Where I live, in southwest Germany, there are a bewildering number of shoe stores that specialize in barefoot-style footwear. I\'ve counted at least four Barfußschuhläden within a mile of my home. I\'d noticed. Last weekend, my kids and I were walking in the Black Forest when we passed a woman hiking barefoot. My eight-year-old is an inveterate gawker, and he stopped and stared at her as though she were insane. Patiently, smilingly, she explained to him the pleasures of walking barefoot, especially outdoors.That encounter motivated me explore the latest peer-reviewed research on minimalist shoes and barefoot walking. After a few hours of reading, I started to think I was the crazy one for binding up my poor feet in thick layers of leather, rubber, and molded plastic.',
        author: { connect: { email: "markham@email.com" } },
        categories: { connect: [{ name: 'Health' }, { name: 'Lifestyle' }] }
    },
    {
        title: 'What the "Happiness Paradox" Can Teach Us About Our Feelings',
        image: 'https://miro.medium.com/max/875/0*ZvpQh97OYDsPAoTE',
        intro: 'Paying too much attention to your emotional state can make you miserable.',
        content: 'Mauss has spent years studying a phenomenon that some have termed the “happiness paradox.” The paradox is that when people try hard to be happy — when they make feeling happy a goal — their well-being tends to suffer for it. There are a lot of reasons for this. Some appear to be cultural. Some have to do with the ways we define and pursue happiness. But an overriding lesson from the happiness research is that the more you obsess about your emotional state — the more significance you assign your feelings, and the more you try to steer them — the more likely you are to get into emotional and psychological trouble.',
        author: { connect: { email: "markham@email.com" } },
        categories: { connect: [{ name: 'Health' }] }
    },
    {
        title: 'Why Your Brain Needs Boundaries',
        image: 'https://miro.medium.com/max/875/0*w92KN-nJyLnIrvso',
        intro: 'And how modern life is ripping them down.',
        content: 'It happens to everyone now and then. You walk into a room and find you\'ve forgotten why you\'re there. Was there something you needed? Or something you wanted to do? Whatever it was, it\'s gone. This is not just a weird mental quirk. It hints at the way your brain relies on spatial and contextual cues to organize information and impose some order on the world. “Entering or exiting through a doorway serves as an "event boundary" in the mind,” said Notre Dame psychologist Gabriel Radvansky, PhD, in a press release that accompanied his 2011 study. More of Radvansky\'s work explains how your brain uses these event boundaries to partition and package experiences in ways that ultimately aid recall and inform behavior — sort of like the way drawing a grid on top of a random assortment of dots can help you better recognize and recreate their pattern.',
        author: { connect: { email: "markham@email.com" } },
        categories: { connect: [{ name: 'Health' }] }
    },
    {
        title: 'Bumping Into Russians.',
        image: 'https://miro.medium.com/max/875/1*9S1G_GFeNQ-iZHs49P-PDQ.jpeg',
        intro: 'At the airport. In the lobby. Suddenly I\'m hearing Russian conversations all around me during my stay in Dubai, giving the war, for me, a new dimension.',
        content: 'I don\'t speak Russian. But I know Russian speak, and I\'ve been hearing more of it here in Dubai, where I have been living the past few months. The language can sound harsh. But when spoken in hushed tones it has a velvety, elegant, almost hypnotic quality that renders it unmistakable. I continue to encounter Russian emigres and speak to them when it feels appropriate. In the elevator, I commented on a small poodle that a middle-aged man was about to take for a walk. I\'m big on elevator convos; I enjoy interacting with strangers and have largely perfected the timing and how to graciously butt into someone\'s life. But this man was in no mood. He mumbled something in Russian without making eye contact. I knew that my gregariousness had failed and that his mind was heavy and far away.',
        author: { connect: { email: "dan@email.com" } },
        categories: { connect: [{ name: 'Politics' }, { name: 'Travel' }] }
    },
    {
        title: 'How I Became the Ultimate Influencer',
        image: 'https://miro.medium.com/max/875/0*6VQ3VdbXaoMP7tRh',
        intro: 'I didn\'t even have to embarrass myself on social media to get there!',
        content: 'As a writer, I am usually forced to say something exceptional, novel, or at the very least, interesting. But over the past two years especially, most of my life is made up of consumerist minutiae. I buy groceries from Trader Joe\'s. I drink Diet Coke. I purchase a Nike sweatshirt at the outlet mall. I watch ESPN because I ran out of other things to watch. The brands we consume, as depressing as it might sound to you, tell the story of who we are. And I\'m more than OK with that. Such is life in 2022. There I was, randomly selected to be “A Voice for [My] Community!” Nielsen wanted to learn about the consumerist behavior that makes up the texture of my life, and I was more than happy to share. After I mailed in my survey, I would basically be as powerful as a congressperson. I was an authentic representative of my community: the silent majority of soda-drinkers who own too many TVs and like women\'s basketball. Finally I was a true influencer, and I didn\'t even have to humiliate myself on the internet to get there.',
        author: { connect: { email: "eve@email.com" } },
        categories: { connect: [{ name: 'Lifestyle' }, { name: 'Business' }] }
    },
    {
        title: 'Why Doing Things Over and Over Won\'t Make You Better',
        image: 'https://preview.colorlib.com/theme/magdesign/images/ximg_2.jpg.pagespeed.ic.fbbBEgB1Q6.webp',
        intro: 'We\'re Missing the Point of That Stupid Clay Pot Story.',
        content: 'If you want to get better, you\'ve got to produce. Again and again. That\'s the argument in The Clay Pot Story. If you haven\'t heard it: “A teacher divides a class into two groups. Group A only has to produce one clay pot. Group B has to make as many clay pots as possible. In the end, not only did Group B make more clay pots, but their final pots were better than the ones made by Group A. Quantity leads to quality.” Whenever people tell this story, it usually gets boiled down to a Very Simple Lesson: you don\'t get better by sitting around theorizing: you get better by doing something over and over and over.',
        author: { connect: { email: "karla@email.com" } },
        categories: { connect: [{ name: 'Lifestyle' }] }
    },
    {
        title: 'Self-Improvement Has Become An Extreme Sport — It Doesn\'t Have To Be.',
        image: 'https://miro.medium.com/max/875/1*FwHXc1uvqhwsEeIkxmpZQw.jpeg',
        intro: 'What we\'re told we must do each day to develop and be successful has gone out of control. We have endless lists of habits that we\'re supposed to do.',
        content: 'Endless lists of habits give the mind no time to rest. You\'re always ON and can\'t think about life. Without time to do absolutely nothing, we end up joining this extreme sport called habits without often realizing it. We end up on auto-pilot. There\'s more important things to worry about. I\'m sure many of us want to be like Tim Ferriss with his extreme habits, but that would be boring. Let Tim be Tim and you be you — love ya Mr Habit-Hacking Ferriss!',
        author: { connect: { email: "endi@email.com" } },
        categories: { connect: [{ name: 'Sport' }] }
    },
    {
        title: 'Design And Creativity Is Top-Class Sport.',
        image: 'https://miro.medium.com/max/875/1*mzaE8-mySDSSGwwXWiXz7w.jpeg',
        intro: 'What separates a designer from other people? All the design-thinking-two-day-boot-camps, visualization-in-a-day-workshops and design-sprint-weeks might lead to the impression that everyone can design.',
        content: 'Everybody can design and that is cool. I\'m all for co-creation, drawing, and reawakening our inner children to become more creative. But I like to compare this to sports. Anyone can go and sit in a race car, but you cannot compare this to the level of Max Verstappen — someone who has trained for this his whole life. Apart from talent, the difference comes down to training. Design and creativity use all kinds of muscles you can train. And what separates designers from other people is that they have been training their design and creativity muscles for a long time.',
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