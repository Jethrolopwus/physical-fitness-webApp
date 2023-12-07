import { SiOpenaigym } from "react-icons/si";


export const links = [
    {
        name: "Home",
        path: "/"
    },
    {
        name: "About",
        path: "/About"
    },
    {
        name: "Gallery",
        path: "/Gallery"
    },
    {
        name: "Plans",
        path: "/Plans"
    },
    {
        name: "Trainers",
        path: "/Trainers"
    },
    {
        name: "Contact",
        path: "/Contact"
    },

]



export const programs =[
    {
        id: 1,
        icon: <SiOpenaigym/>,
        title: "program1",
        info: "This is the day that the Lord has made. we will rejoice",
        path: "/programs/111"
    },
    {
        id: 2,
        icon: <SiOpenaigym/>,
        title: "program1",
        info: "This is the day that the Lord has made. we will rejoice",
        path: "/programs/222"
    },
    {
        id: 3,
        icon: <SiOpenaigym/>,
        title: "program1",
        info: "This is the day that the Lord has made. we will rejoice",
        path: "/programs/333"
    },
    {
        id: 4,
        icon: <SiOpenaigym/>,
        title: "program1",
        info: "This is the day that the Lord has made. we will rejoice",
        path: "/programs/444"
    },
   
]

export const values = [
    {
        id: 1,
        icon: <SiOpenaigym/>,
        title: "value one",
        desc: "This is the value that describes the initial assignment to its base."
    },
    {
        id: 2,
        icon: <SiOpenaigym/>,
        title: "value two",
        desc: "This is the value that describes the initial assignment to its base."
    },
    {
        id: 3,
        icon: <SiOpenaigym/>,
        title: "value three",
        desc: "This is the value that describes the initial assignment to its base."
    },
    {
        id: 4,
        icon: <SiOpenaigym/>,
        title: "value four",
        desc: "This is the value that describes the initial assignment to its base."
    }
]


export const faqs = [
    {
        id: 1,
        question: "How oftens should I exercise",
        answer: "Atleast twice in a week to keep fit both physically and other wise"
    },
    {
        id: 2,
        question: "What time of the day is best for work out",
        answer: "Atleast in the morning before going to work and should be twice in a week to keep fit both physically and other wise"
    },
    {
        id: 3,
        question: "How oftens should I exercise",
        answer: "Atleast twice in a week to keep fit both physically and other wise"
    },
    {
        id: 4,
        question: "How oftens should I exercise",
        answer: "Atleast twice in a week to keep fit both physically and other wise"
    },
]

export const testimonials = [
    {
        id: 1,
        name: "Peter Gyang",
        quote: "I interact with this website Atleast twice in a week to keep fit both physically and other wise",
        job: "Web Developer",
        avatar: require("./images/logan.jpg")
    },
    {
        id: 2,
        name: "Victor James",
        quote: "I interact with this platform and I got value which help my fitness to 100% success",
        job: "Student",
        avatar: require("./images/jonas-kakarot.jpg")
    },
    {
        id: 3,
        name: "Jesica Pam",
        quote: "Atleast I use this application for my fitness and that of something",
        job: "civil servant",
        avatar: require("./images/ali-morshedlo.jpg")
    },
    {
        id: 4,
        name: " Sunday John",
        quote: "Atleast twice in a week on this platform improve my fitness by 40%",
        job: "Data Scientist",
        avatar: require("./images/boliviaint.jpg")
    },
    {
        id: 5,
        name: " Isaac Doe",
        quote: "This is an amzing solution to the fitness and physical exercis as a whole, Try it out.",
        job: "pharmacist",
        avatar: require("./images/irene-strong.jpg")
    },
   
]

export const plans = [
    {
        id: "1",
        name: "Silver package",
        desc: "This package is good for beginner who  constant help",
        price: 29.99,
        features: {
            title: "feature",
            items:             
            [
            {feature: 'First Feature', available: true},
            {feature: 'Second Feature', available: true},
            {feature: 'Third Feature', available: true},
            {feature: 'Fourth Feature', available: true},
            {feature: 'Fifth Feature', available: false},
            {feature: 'Sixeth Feature', available: false},
            {feature: 'Seventh Feature', available: false},
            {feature: 'Eighth Feature', available: false},
            {feature: 'Nineth Feature', available: false},
            {feature: 'Tenth Feature', available: false},
            {feature: 'Eleventh Feature', available: false}
            ],
         },
    },

    {
        id: "2",
        name: "Gold package",
        desc: "This package is good for beginner who now knows what they are doing.",
        price: 49.99,
        features: {
            title: "feature",
            items: 
            [
                {feature: 'First Feature', available: true},
                {feature: 'Second Feature', available: true},
                {feature: 'Third Feature', available: true},
                {feature: 'Fourth Feature', available: true},
                {feature: 'Fifth Feature', available: true},
                {feature: 'Sixeth Feature', available: true},
                {feature: 'Seventh Feature', available: true},
                {feature: 'Eighth Feature', available: false},
                {feature: 'Nineth Feature', available: false},
                {feature: 'Tenth Feature', available: false},
                {feature: 'Eleventh Feature', available: false}
            ]
         },
    },
    {
        id: "3",
        name: "Platinum package",
        desc: "This package is good for bussy people who needs home service",
        price: 89.99,
        features: {
            title: "feature",
            items:     
            [
                {feature: 'First Feature', available: true},
                {feature: 'Second Feature', available: true},
                {feature: 'Third Feature', available: true},
                {feature: 'Fourth Feature', available: true},
                {feature: 'Fifth Feature', available: true},
                {feature: 'Sixeth Feature', available: true},
                {feature: 'Seventh Feature', available: true},
                {feature: 'Eighth Feature', available: true},
                {feature: 'Nineth Feature', available: true},
                {feature: 'Tenth Feature', available: true},
                {feature: 'Eleventh Feature', available: false}
            ]
        }
    },
    
   
]






const Trainer1 = require("./images/trainer1.jpg")
const Trainer2 = require("./images/trainer2.jpg")
const Trainer3 = require("./images/trainer3.jpg")
const Trainer4 = require("./images/trainer4.jpg")
const Trainer5 = require("./images/trainer5.jpg")
const Trainer6 = require("./images/trainer6.jpg")


export const trainers = [
    {
        id: 1,
        image: Trainer1,
        name: "James Bob",
        job: "Aerobic Trainer",
        socials: [
            "https://instagram.com", "https://twitter.com", "https://facebook.com", "https://linkedn.com" 
        ]

    },
    {
        id: 2,
        image: Trainer2,
        name: "Peter Joe",
        job: "Speed Trainer",
        socials: [
            "https://instagram.com", "https://twitter.com", "https://facebook.com", "https://linkedn.com" 
        ]

    },
    {
        id: 3,
        image: Trainer3,
        name: "Halan Jeth",
        job: "Flexibility Trainer",
        socials: [
            "https://instagram.com", "https://twitter.com", "https://facebook.com", "https://linkedn.com" 
        ]

    },
    {
        id: 4,
        image: Trainer4,
        name: "Lil Jones",
        job: "Circuit Trainer",
        socials: [
            "https://instagram.com", "https://twitter.com", "https://facebook.com", "https://linkedn.com" 
        ]

    },
    {
        id: 5,
        image: Trainer5,
        name: "Dave Paul",
        job: "Body Composition Trainer",
        socials: [
            "https://instagram.com", "https://twitter.com", "https://facebook.com", "https://linkedn.com" 
        ]

    },
    {
        id: 6,
        image: Trainer6,
        name: "Paul Walter",
        job: "Physical Inteligence Trainer",
        socials: [
            "https://instagram.com", "https://twitter.com", "https://facebook.com", "https://linkedn.com" 
        ]

    },
    {
        id: 1,
        image: Trainer1,
        name: "James Bob",
        job: "Aerobic Trainer",
        socials: [
            "https://instagram.com", "https://twitter.com", "https://facebook.com", "https://linkedn.com" 
        ]

    },





]