import Container from "@/components/Layout/Container";
import Layout from "@/components/Layout/MasterLayout";
import ProjectCard from "@/components/Projects/ProjectCard";
import { ProjectStructureProps } from "@/interfaces/Project.interface";
import { readdirSync } from "fs";
import { useEffect, useState } from "react";

/**
 * The projects page
 *
 * @returns {JSX.Element} The projects page
 */
export default function ProjectsPage({ _projects }: { _projects: string }) {
    // Load in all projects from the projects directory
    let [projects, setProjects] = useState(JSON.parse(_projects) as ProjectStructureProps[]);

    useEffect(() => {
        // Get the current time
        const now = new Date().getTime();

        let projectsCopy = projects;

        const getLastModified = async (project: ProjectStructureProps) => {
            // Get the name of the repository from the GitHub link
            const repoName = project.github.split("/").pop();
            const res = await fetch(`https://api.github.com/repos/ElBeenMachine/${repoName}/commits`);

            // If the request fails, set the date to the default date
            if (!res.ok) return;

            // Parse the response
            const data = await res.json();

            // If there is no data, set the date to the default date
            if (!data) return;

            // Set the date of the last commit
            project.date = new Date(data[0].commit.author.date);

            // Store the date of the last commit in local storage, as well as the timestamp of when it was stored
            localStorage.setItem(`lastModified-${project.id}`, JSON.stringify({ lastModified: new Date(data[0].commit.author.date), timestamp: now }));
        };

        projectsCopy.forEach((project) => {
            // Store dates in local storage to reduce the number of requests to the GitHub API, only update every 24 hours
            const localLastModified = localStorage.getItem(`lastModified-${project.id}`);

            // If the date is stored in local storage, check if it is older than 24 hours
            if (localLastModified) {
                // Parse the stored data
                const { lastModified, timestamp } = JSON.parse(localLastModified);

                // If the data is older than 24 hours, update it
                if (now - timestamp < 86400000) {
                    project.date = lastModified;
                    return;
                }
            }

            // If a GitHub link is provided, create a fetch request to the GitHub API to get the date of the latest commit
            if (project.github) {
                getLastModified(project);
            }
        });

        // Sort the projects
        setProjects(projectsCopy.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()));
    }, []);

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
