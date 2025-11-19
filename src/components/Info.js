import self from "./home/self.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Luís",
    lastName: "Ribeiro",
    nickname: "lmmr",
    initials: "lr", // the example uses first and last, but feel free to use three or more if you like.
    position: "Software Engineer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    quote1: "&#34;Coding is to programming what typing is to writing.&#34;",
    quote2: "&#34;Beauty is our business&#34;",
    socials: [
        {
            link: "./CurriculumVitae.pdf",
            icon: "fa fa-file-o",
            label: 'cv'
        },
        {
            link: "https://github.com/ilmmr/",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://linkedin.com/in/lmmribeiro",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "mailto:lmmr_@outlook.pt",
            icon: "fa fa-send",
            label: 'email'
        }
    ],
    intro: "Hi there, my name is Luís",
    short: "📍 Graduated in Braga, Portugal.",
    short1: "👨‍💻 Currently working @Bosch.",
    bio1: "Currently working as a Software Engineer and Architect, with a strong focus on software configuration.",
    bio2: "I am particularly enthusiastic about applying Formal Methods to software engineering, bridging rigorous theory with real-world development.",
    bio3: "I am always open to new opportunities and committed to continuously expanding my skills and expertise.",
    activities1: "In my spare time, I usually try to keep both my mind and body occupied. I regularly exercise, where any sport is welcomed. I also enjoy reading, from the basics of Computer Science to Philosophy.",
    activities2: "Additionally, to build a so-called online portfolio, I usually try to keep my network updated on LinkedIn. I also created a 5-minute weekly podcast, where I share the beauty of knowing nothing.",    
    activities3: "Additionally, I also write on a blog about books I have read, along with some brief notes.",
    experience1: "I began my career with an internship at HydraIT, where I worked on consulting and development using Microsoft’s ERP systems.",
    experience2: "During my master’s, I joined INESC TEC as a researcher, where I focused on model checking and the correctness of distributed systems. My experience with Formal Methods made a real difference and greatly enhanced the quality of my work.",
    experience3: "Since 2023, I have been working at Bosch as a Software Engineer and Architect, contributing to the development of the next-generation airbag platform. My work is currently focused on software configuration, where I am both the process and method responsible. I am also a process proxy and trainer for the software modelling methods."
}
