const projects = [
    {
        title: "472 Squadron Air Cadets Website",
        description: `The website made for my local Air Cadet Squadron - 472 (Hoylake and West Kirby). This website was the first project I made for an external party, and allowed me to gain insight into the communication required when working with a client on a project.`,
        technologies: ["Next.js", "Vercel", "HTML", "CSS", "JavaScript"],
        image: "/img/projects/cadets-site.png",
        href: "https://www.472squadron.com",
        featured: true,
    },
    {
        title: "Photo Gallery App",
        description: `This photo gallery application was my introduction into Amazon's cloud storage platform S3, as well as using a CDN to delivery platform-optimised copies of full-scale images. It also uses authentication and introduced me to hashing passwords for secure storage in a remote database.`,
        technologies: [
            "Next.js",
            "Vercel",
            "JavaScript",
            "S3",
            "APIs",
            "MongoDB",
        ],
        image: "/img/projects/photo-gallery.png",
        href: "https://photos.beantech.uk",
        featured: true,
    },
];

export default projects;
