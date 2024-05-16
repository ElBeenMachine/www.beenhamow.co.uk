import { ProjectStructureProps } from "@/interfaces/Project.interface";

export default <ProjectStructureProps>{
    id: "uptime-monitor",
    title: "Uptime Monitor",
    summary: "A docker-based web application that allows users to monitor the uptime of their websites and services.",
    description: `Uptime Monitor is an ongoing project that I am working on. It is a web application that allows users to monitor the uptime of their websites and services. The application is built using Next.js, Tailwind CSS, and MySQL and has been published to docker, making it ideal for deployment in a homelab or cloud environment. The application is currently in the development stage, and I am continually working on adding new features and improving the user experience.
    
    The application is built using a containerised architecture, with a Next.js frontend and a Node.js backend. The frontend communicates with the backend using RESTful APIs, and the backend communicates with the database using the MySql2 library.`,
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "MySQL", "Docker", "CI/CD"],
    website: "https://elbeenmachine.github.io/uptime-monitor",
    github: "https://github.beenhamow.co.uk/uptime-monitor",
    repoName: "ElBeenMachine/uptime-monitor",
    image: "https://opengraph.githubassets.com/e80a501c76c941970a3fb7ab34ff714074313db116e8129c66b00a8ae8354b4b/ElBeenMachine/uptime-monitor",
    date: new Date("2024-03-27"),
};
