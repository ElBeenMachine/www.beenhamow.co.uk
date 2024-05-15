import { ProjectStructureProps } from "@/interfaces/Project.interface";
import moment from "moment";
import Link from "next/link";
import { useEffect, useState } from "react";

import { CiGlobe } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

/**
 * ProjectCard component
 *
 * @param project The project to display
 */
export default function ProjectCard({ project }: { project: ProjectStructureProps }) {
    const [date, setDate] = useState<Date>(project.date);

    useEffect(() => {
        // Get the current time
        const now = new Date().getTime();

        const getLastModified = async () => {
            // Get the name of the repository from the GitHub link
            const repoName = project.github.split("/").pop();
            const res = await fetch(`https://api.github.com/repos/ElBeenMachine/${repoName}/commits`);

            // If the request fails, set the date to the default date
            if (!res.ok) return setDate(project.date);

            // Parse the response
            const data = await res.json();

            // If there is no data, set the date to the default date
            if (!data) return setDate(project.date);

            // Set the date of the last commit
            setDate(new Date(data[0].commit.author.date));

            // Store the date of the last commit in local storage, as well as the timestamp of when it was stored
            localStorage.setItem(`lastModified-${project.id}`, JSON.stringify({ lastModified: data[0].commit.author.date, timestamp: now }));
        };

        // Store dates in local storage to reduce the number of requests to the GitHub API, only update every 24 hours
        const localLastModified = localStorage.getItem(`lastModified-${project.id}`);

        // If the date is stored in local storage, check if it is older than 24 hours
        if (localLastModified) {
            // Parse the stored data
            const { lastModified, timestamp } = JSON.parse(localLastModified);

            // If the data is older than 24 hours, update it
            if (now - timestamp < 86400000) return setDate(lastModified);
        }

        // If a GitHub link is provided, create a fetch request to the GitHub API to get the date of the latest commit
        if (project.github) {
            getLastModified();
        }
    }, []);

    return (
        <Link href={`/projects/${project.id}`} className="w-full flex flex-col gap-2 project-card relative lg:hover:scale-105 transition-all">
            <div className="z-10 w-full h-full p-6 flex flex-col bg-background-primary/80 hover:opacity-90">
                <h2 className="text-xl font-semibold">{project.title}</h2>
                <p className="text-sm text-accent font-light">Last Updated {moment(date).fromNow()}</p>
                <p className="mt-3">{project.summary}</p>
                <div className={"flex-grow"}></div>
                <p className="text-gray-300 whitespace-pre-wrap mt-3">{project.technologies.join("     ")}</p>
                <div className="flex gap-2 mt-3">
                    {project.website && <CiGlobe size={20} />}
                    {project.github && <FaGithub size={20} />}
                </div>
            </div>
            <img src={project.image} alt={project.title} className="absolute z-0 w-full top-0 left-0 h-full object-cover object-center" />
        </Link>
    );
}
