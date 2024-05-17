import { ProjectStructureProps } from "@/interfaces/Project.interface";

export default <ProjectStructureProps>{
    id: "ljmu-se-team-portfolio",
    title: "LJMU SE Team Portfolio",
    summary: "A portfolio of projects for a team of Software Engineering students at Liverpool John Moores University.",

    description: `This project is a work in progress, but is a collaborative effort to create a team portfolio website built with NextJS. The website is designed to showcase the projects of a team of Software Engineering students at Liverpool John Moores University (LJMU). The website is built with TypeScript and React, providing a modern and responsive user interface. TailwindCSS is used to style the website, offering a utility-first approach for rapid development and customization.
 
    For a more robust hosting environment, the website resides on a Virtual Private Server (VPS). This allows for greater control and flexibility compared to shared hosting options. To automate deployments and keep the website up-to-date, Docker is used for CI/CD (Continuous Integration and Continuous Delivery). Notably, this project introduced me to Azure's Container Registry, a valuable tool for managing Docker images.

    The website functions as a central hub for all team projects. It features a clear list of projects and allows for hosting publicly accessible resources, like media from university open days. Team members can even add and edit their own projects directly on the website, fostering collaboration and a shared platform to showcase their work.

    In essence, this project highlights my ability to create a dynamic and user-friendly portfolio website using modern technologies. By implementing a CI/CD pipeline with Docker, the website stays up-to-date and requires minimal maintenance, making it a valuable tool for the entire team.`,

    technologies: ["NextJS", "Docker", "CI/CD", "TypeScript", "React", "TailwindCSS"],
    website: "https://www.ljmu.dev",
    github: "https://www.github.com/LJMU-SE/www.ljmu.dev",
    repoName: "ljmu-se/www.ljmu.dev",
    image: "/img/projects/ljmu.dev.jpg",
    date: new Date("2004-03-17"),
};
