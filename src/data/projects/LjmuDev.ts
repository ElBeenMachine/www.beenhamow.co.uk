import { ProjectStructureProps } from "@/interfaces/Project.interface";

export default <ProjectStructureProps>{
    id: "ljmu-se-team-portfolio",
    title: "LJMU SE Team Portfolio",
    summary: "A portfolio of projects for a team of Software Engineering students at Liverpool John Moores University.",
    description: `This portfolio is a website containing a list of projects and information about the team members. It is built using NextJS, TypeScript, and TailwindCSS. The website is hosted on a VPS and uses Docker for CI/CD. 

    This project was my first experience with the Azure container registry, and I learned a lot about CI/CD pipelines, allowing the site to be constantly up to date with the production branch, requiring minimal maintenance.
    
    The website will be home to a variety of projects, including public access to resources and media created on university open days. The website is designed to be a central hub for all projects created by the team, allowing all team members to add and edit their own projects.`,
    technologies: ["NextJS", "Docker", "CI/CD", "TypeScript", "React", "TailwindCSS"],
    website: "https://www.ljmu.dev",
    github: "https://www.github.com/LJMU-SE/www.ljmu.dev",
    repoName: "ljmu-se/www.ljmu.dev",
    image: "/img/projects/ljmu.dev.jpg",
    date: new Date("2004-03-17"),
};
