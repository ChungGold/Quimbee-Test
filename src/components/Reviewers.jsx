import chung from '../assets/chung.png';
import matthew from '../assets/matthew.PNG';
import rogan from '../assets/rogan.png';

const Reviewers = [
    {
        image: matthew,
        alt: "Matthew Folkner",
        name: "Matthew Folkner",
        verified: true,
        summary: "Quimbee is the best thing ever. And this goes to two lines.",
        description: "I love Quimbee. It saved me in the 1L and it's saving me in 2L. I love it all and it's money well spent.",
        rating: 4,
        daysAgo: 3,
        business: "Quimbee Bar Review"
    },
    {
        image: chung,
        alt: "Chung Au",
        name: "Chung Au",
        verified: false,
        summary: "I am excited to interview as a frontend developer!",
        description: "I took a few extra steps in this technical interview. I hope it impresses!",
        rating: 5,
        daysAgo: 2,
        business: "Quimbee Bar Review"
    },
    {
        image: rogan,
        alt: "Joe Rogan",
        name: "Joe Rogan",
        verified: true,
        summary: "I would recommend both Quimbee and Chung Au",
        description: "Chung Au is a capable frontend developer with a sense of fun. I have never worked with him, but I just know it.",
        rating: 3,
        daysAgo: 6,
        business: "Joe Rogan Experience"
    }
]

export default Reviewers;