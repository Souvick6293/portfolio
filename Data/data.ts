

export const BaseInfo = {
    name: "Souvick panja",
    position: ["Web Developer", "React Developer", "HTML Developer"],
    introduction: "I am a skilled Frontend Developer from Kolkata, India, with a passion for crafting dynamic and responsive web experiences.I specialize in building interactive, user-friendly applications that blend creativity with seamless functionality.",
    profilePic: "/assets/my-photo.png",
    skill: ['/assets/logo1.png',
        '/assets/logo2.png',
        '/assets/logo3.png',
        '/assets/logo4.png',
        '/assets/logo5.png',
        '/assets/logo6.png',
        '/assets/logo7.png'
    ]
}

export const aboutInfo = {
    description:`I am a Frontend Web Developer with over a year of experience in freelancing projects as an HTML Developer. To enhance my skills and become proficient in frontend development, I completed React.js training at Webskitters Academy, where I also worked on several React.js projects. My expertise includes React.js, JavaScript, HTML, CSS, and Bootstrap, and I specialize in designing and developing modern, user-friendly, and fully responsive web applications with a focus on performance and visual appeal.`,
    experience:"1+",
    project:"10+"
}

export const servicesData = [
    { id: 1, title: "User Interfaces", icon: "/assets/service1.png", description: "Crafting intuitive and engaging UI designs for better user experiences." },
    { id: 2, title: "Web Applications", icon: "/assets/service2.png", description: "Building fast, scalable, and dynamic web applications tailored to your needs." },
    { id: 3, title: "Responsive Design", icon: "/assets/service3.png", description: "Creating designs that seamlessly adapt to all screen sizes and devices." },
    { id: 4, title: "HTML Conversion", icon: "/assets/service4.png", description: "Converting Figma, PSD, and other design files into clean, efficient HTML code." },
    { id: 5, title: "API Integration", icon: "/assets/service5.png", description: "Integrating APIs to enhance functionality and improve data flow." },
    { id: 6, title: "SEO Optimization", icon: "/assets/service6.png", description: "Implementing SEO strategies to improve search engine rankings and visibility." }
];


export const skillsData = [
    { title: 'HTML', percent: 95, progressColor: '#f97316' },
    { title: 'CSS', percent: 90, progressColor: '#3b82f6' },
    { title: 'Bootstrap', percent: 85, progressColor: '#22c55e' },
    { title: 'Tailwind', percent: 60, progressColor: '#a855f7' },
    { title: 'JavaScript', percent: 70, progressColor: '#f97316' },
    { title: 'TypeScript', percent: 60, progressColor: '#3b82f6' },
    { title: 'React JS', percent: 80, progressColor: '#3b82f6' },
    { title: 'Next JS', percent: 65, progressColor: '#22c55e' },
    { title: 'Material UI', percent: 75, progressColor: '#a855f7' },
    { title: 'Redux', percent: 60, progressColor: '#a85558' },
    { title: 'Tanstack Query', percent: 70, progressColor: '#f43f5e' },
    { title: 'Sanity', percent: 70, progressColor: '#3b82f6' },
    { title: 'Supabase', percent: 50, progressColor: '#10b981' },
    { title: 'Prisma', percent: 40, progressColor: '#f59e0b' },
    { title: 'Git & GitHub', percent: 70, progressColor: '#8b5cf6' },

];


export const projectData = [
    {
        id: 1,
        title: 'Sanctuary cosmetic center',
        description: `Sanctuary Cosmetic Center, located in McLean, Virginia, offers advanced surgical and non-surgical aesthetic treatments. Led by board-certified plastic surgeons, the center provides procedures for the face, chest, abdomen, and body contouring. Popular non-surgical options include CoolSculpting Elite for fat reduction, Diamond Glow for radiant skin, and FaceTite & BodyTite for tighter contours. They also offer Laser Hair Removal for smooth skin, Microblading for fuller brows, and Silhouette Instalift for a youthful lift.`,
        projectImage: '/assets/sanctuary-project.png',
        projectGitLink: 'https://github.com/Souvick6293/Sanctuary-cosmetic-center',
        projectUrlLink: 'https://souvick6293.github.io/Sanctuary-cosmetic-center/',
        technologies: 'HTML, CSS, JavaScript, Bootstrap'
    },
     {
        id:2,
        title:'Diwali Website',
        description:`In 2024, Webskitters Academy organized the "Code with Puja" contest, where participants were tasked with designing a Puja-themed website using HTML, CSS, and JavaScript. I participated in the contest and created a vibrant Diwali-themed website, which eventually won the competition.
        This website beautifully captures the essence of Diwali, showcasing how we can illuminate our surroundings with vibrant lights and celebrate the festival with joy. It highlights various Diwali events, offering ideas on how to spend the festival in a memorable way. Additionally, the website features insights into famous Kali temples, emphasizing their cultural significance during this auspicious occasion.`,
        projectImage:'/assets/diwali-project.png',
        projectGitLink:'https://github.com/Souvick6293/diwali-code-with-puja',
        projectUrlLink:'https://souvick6293.github.io/diwali-code-with-puja/',
        technologies: 'HTML, CSS, JavaScript, Bootstrap'
     },
     {
        id:3,
        title:'Engiconnect International Digital Marketplace',
        description:`Engiconnect International is a digital horizontal marketplace that I have developed to simplify access to essential industrial products. I have designed this platform to include multiple verticals such as durable hand tools, high-quality bicycles, efficient pumps and valves, and reliable fasteners. My goal was to create a platform that offers a seamless, secure, and efficient solution for both buyers and sellers. Through Engiconnect International, I aim to connect businesses globally and make trade easier than ever.`,
        projectImage:'/assets/engiconnect-project.png',
        projectGitLink:'https://github.com/Souvick6293/Engiconnect-International-Digital-Marketplace',
        projectUrlLink:'https://souvick6293.github.io/Engiconnect-International-Digital-Marketplace/',
        technologies: 'HTML, CSS, JavaScript, Bootstrap'
     },
     {
        id:4,
        title:'Title: Fresh Bazar - Your Daily Grocery Partner',
        description:`Fresh Bazar is a modern and user-friendly grocery e-commerce website designed to simplify your daily shopping experience. With a wide range of fresh fruits, vegetables, dairy products, and essential household items, Fresh Bazar ensures quality and convenience at your fingertips. The website offers an intuitive interface, easy navigation, and secure checkout, making it the perfect solution for all your grocery needs. Whether you're planning a quick meal or stocking up for the week, Fresh Bazar has you covered!`,
        projectImage:'/assets/fresh-project.png',
        projectGitLink:'fb.com',
        projectUrlLink:'fb.com',
        technologies: 'HTML, CSS, JavaScript, React Js, Mui, Redux etc'
     }
];



export const contactData = {
    phone:"+91 8327671187",
    email:"souvickpanja629@gmail.com",
    address:"Howrah, India"
}


export interface SocialLink {
    id: number;
    name: string;
    url: string;
    icon: 'FaFacebook' | 'FaWhatsapp' | 'FaLinkedin' | 'FaGithub'; 
}

export const socialLinks: SocialLink[] = [
    {
        id: 1,
        name: 'Facebook',
        url: 'https://www.facebook.com/share/15tBpbuXsn/',
        icon: 'FaFacebook'
    },
    {
        id: 2,
        name: 'Whatsapp',
        url: 'https://wa.me/918327671187',
        icon: 'FaWhatsapp'
    },
    {
        id: 3,
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/souvick-panja-87bab11b1/',
        icon: 'FaLinkedin'
    },
    {
        id: 4,
        name: 'GitHub',
        url: 'https://github.com/Souvick6293',
        icon: 'FaGithub'
    }
];

