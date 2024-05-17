import { ProjectStructureProps } from "@/interfaces/Project.interface";

export default <ProjectStructureProps>{
    id: "my-portfolio",
    title: "Personal Portfolio",
    summary: "This very website...",

    description: `This project is my personal website, designed to showcase my skills and experience as a developer. Built for a seamless user experience across devices, the website utilizes responsive design principles to adapt its layout for optimal viewing on desktops, tablets, and mobile phones.

    To efficiently manage the website's content, I implemented dynamic project loading. This allows me to easily add new projects without requiring full website updates. A dedicated contact form enables visitors to reach out directly, without exposing my personal email.

    The website is published to Docker Hub, a robust platform for containerized applications. Leveraging a GitHub pipeline automates the publishing process, ensuring the website consistently reflects my latest work. This combination of technologies fosters efficiency and ensures a user-friendly platform for showcasing my technical expertise.`,

    technologies: ["Next.JS", "TypeScript", "React", "TailwindCSS", "CI/CD", "Docker"],
    website: "https://www.beenhamow.co.uk",
    github: "https://github.beenhamow.co.uk/www.beenhamow.co.uk",
    repoName: "ElBeenMachine/www.beenhamow.co.uk",
    image: "/img/meta/default.png",
    date: new Date("2004-03-17"),
};
