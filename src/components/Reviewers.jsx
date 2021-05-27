import chung from '../assets/chung.png';
import ryan from '../assets/ryan.jpg';
import rogan from '../assets/rogan.png';
import bua from '../assets/bua.jpg';

const Reviewers = [
    {
        image: chung,
        alt: "Chung Au",
        name: "Chung Au",
        verified: true,
        summary: "I am excited to interview as a frontend developer!",
        description: "I took a few extra steps in this technical interview. I hope it impresses!",
        rating: 5,
        daysAgo: 2,
        business: "Technical Assignment"
    },
    {
        image: ryan,
        alt: "Ryan Hall",
        name: "Ryan Hall",
        verified: true,
        summary: "I can endorse Chung.",
        description: "I don't really know the guy, but anybody that watches my interviews is solid in my book.",
        rating: 4,
        daysAgo: 3,
        business: "Fifty/50 BJJ"
    },
    {
        image: rogan,
        alt: "Joe Rogan",
        name: "Joe Rogan",
        verified: false,
        summary: "I would recommend Chung Au",
        description: "Chung Au is a capable frontend developer with a sense of fun. I have never worked with him, but I just know it.",
        rating: 3,
        daysAgo: 6,
        business: "Joe Rogan Experience"
    },
    {
        image: bua,
        alt: "Buakaw Banchamek",
        name: "Buakaw Banchamek",
        verified: false,
        summary: "I don't understand",
        description: "I'm not sure why I was chosen as a review-card. I'm a monster in Muay Thai though.",
        rating: 2,
        daysAgo: 6,
        business: "Banchamek Gym"
    }
]

export default Reviewers;