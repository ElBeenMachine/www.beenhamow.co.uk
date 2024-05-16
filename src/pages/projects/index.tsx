import Container from "@/components/Layout/Container";
import Layout from "@/components/Layout/MasterLayout";
import ProjectCard from "@/components/Projects/ProjectCard";
import { ProjectStructureProps } from "@/interfaces/Project.interface";
import getLastModified from "@/utils/GetProjectLastUpdated";
import { readdirSync } from "fs";
import { useEffect, useState } from "react";
import { BarLoader } from "react-spinners";

/**
 * The projects page
 *
 * @returns {JSX.Element} The projects page
 */
export default function ProjectsPage({ _projects }: { _projects: string }) {
    // Load in all projects from the projects directory
    let [projects, setProjects] = useState([] as ProjectStructureProps[]);

    useEffect(() => {
        let projectsCopy = JSON.parse(_projects) as ProjectStructureProps[];

        const timeout = setTimeout(() => {
            Promise.all(projectsCopy.map(getLastModified)).then(() => {
                setProjects(projectsCopy.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()));
            });
        }, 500);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <Layout pageTitle="My Projects" pageDescription="A list of projects and works completed by Ollie Beenham.">
            <div className="my-5">
                <Container>
                    <h1 className="text-4xl font-bold">My Projects</h1>
                    {projects.length == 0 && (
                        <div className="w-full h-96 flex justify-center items-center">
                            <BarLoader color="#00FFFF" />
                        </div>
                    )}

                    {projects.length > 0 && (
                        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 my-5">
                            {projects.map((project) => (
                                <ProjectCard key={project.title} project={project} />
                            ))}
                        </div>
                    )}
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
