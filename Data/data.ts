

export const BaseInfo = {
    name: "souvick panja",
    position: ["Web Developer", "React Developer", "HTML Developer"],
    introduction: "I am a skilled Frontend Developer from Kolkata, India, with a passion for crafting dynamic and responsive web experiences.I specialize in building interactive, user-friendly applications that blend creativity with seamless functionality.",
    profilePic: "assets/my-photo.png",
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
    description:"I am a Frontend Web Developer with a strong passion for designing and developing modern, user-friendly websites. My expertise lies in React.js, JavaScript, HTML, CSS, and Bootstrap, and I focus on creating visually appealing, high-performance, and fully responsive web applications.",
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
    { title: 'React JS', percent: 80, progressColor: '#3b82f6' },
    { title: 'Next JS', percent: 65, progressColor: '#22c55e' },
    { title: 'Material UI', percent: 75, progressColor: '#a855f7' }
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
    icon: 'FaFacebook' | 'FaTwitter' | 'FaLinkedin' | 'FaGithub'; 
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
        name: 'Twitter',
        url: 'https://twitter.com',
        icon: 'FaTwitter'
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

