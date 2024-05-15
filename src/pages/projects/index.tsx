import Container from "@/components/Layout/Container";
import Layout from "@/components/Layout/MasterLayout";
import ProjectCard from "@/components/Projects/ProjectCard";
import { ProjectStructureProps } from "@/interfaces/Project.interface";
import { readdirSync } from "fs";

/**
 * The projects page
 *
 * @returns {JSX.Element} The projects page
 */
export default function ProjectsPage({ _projects }: { _projects: string }) {
    // Load in all projects from the projects directory
    const projects = JSON.parse(_projects) as ProjectStructureProps[];

    return (
        <Layout pageTitle="My Projects">
            <div className="my-5">
                <Container>
                    <h1 className="text-4xl font-bold">My Projects</h1>
                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 my-5">
                        {projects.map((project) => (
                            <ProjectCard key={project.title} project={project} />
                        ))}
                    </div>
                </Container>
            </div>
        </Layout>
    );
}

/**
 * Get the projects from the projects directory
 *
 * @returns {Promise<{ props: { projects: string } }>} The projects
 */
export async function getServerSideProps() {
    const projectFiles = readdirSync("src/data/projects");

    // Loop through the files and add the projects to an array
    let projects = projectFiles
        .filter((file) => file !== "_Template.ts")
        .map((file) => {
            // Load the typescript file
            let project = require(`../../data/projects/${file}`).default;

            return project;
        });

    projects = projects.sort((a, b) => b.date - a.date);

    return { props: { _projects: JSON.stringify(projects) } };
}
