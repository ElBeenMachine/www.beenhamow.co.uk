import { ProjectStructureProps } from "@/interfaces/Project.interface";

export default <ProjectStructureProps>{
    id: "uptime-monitor",
    title: "Uptime Monitor",
    summary: "A docker-based web application that allows users to monitor the uptime of their websites and services.",

    description: `This project is an ongoing development of a web-based uptime monitor built with a focus on developer experience, flexibility, and scalability. Leveraging my familiarity with NodeJS, I opted for this robust and event-driven runtime environment to handle asynchronous tasks like scheduling health checks efficiently.  Building upon NodeJS, the NextJS framework provides a server-rendered application with features like automatic code-splitting and built-in routing, streamlining development and optimizing performance.

    To achieve a consistent and customizable user interface for individual status pages, I integrated Tailwind CSS. Tailwind's utility-first approach offers a vast library of pre-built CSS classes, allowing for rapid UI development without writing extensive custom styles. This not only saves development time but also ensures a consistent look and feel across the entire application.

    The project prioritizes open-source development, hosted publicly on GitHub. This allows for collaboration and contribution from the developer community, fostering ongoing improvement.

    To ensure data persistence and independence from the user interface, the monitor utilizes a dedicated SQL database for storage. This separation allows for independent updates to the front-end without compromising monitoring data integrity.

    For streamlined development and deployment, the project leverages CI/CD pipelines. These pipelines automate tasks like building and testing the codebase, creating Docker images using a provided docker-compose file, and finally pushing them to Docker Hub. This automated workflow ensures consistent and efficient deployments. Additionally, the integration of unit tests within the CI/CD pipeline is planned for the future. This will enhance code coverage and overall project quality.`,

    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "MySQL", "Docker", "CI/CD"],
    website: "https://elbeenmachine.github.io/uptime-monitor",
    github: "https://github.beenhamow.co.uk/uptime-monitor",
    repoName: "ElBeenMachine/uptime-monitor",
    image: "https://opengraph.githubassets.com/e80a501c76c941970a3fb7ab34ff714074313db116e8129c66b00a8ae8354b4b/ElBeenMachine/uptime-monitor",
    date: new Date("2024-03-27"),
};
