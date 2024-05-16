import Layout from "@/components/Layout/MasterLayout";
import { ProjectStructureProps } from "@/interfaces/Project.interface";
import { readdirSync } from "fs";

interface ProjectDetailPageProps {
    _project: string;
}

/**
 * The project detail page
 *
 * @param {ProjectDetailPageProps} props The project detail page props
 * @returns {JSX.Element} The project detail page
 */
export default function ProjectDetailPage({ _project }: ProjectDetailPageProps) {
    const project = JSON.parse(_project) as ProjectStructureProps;

    console.log(project);

    return (
        <Layout pageTitle={project.title} pageDescription={project.summary}>
            <h1>Project Detail Page</h1>
        </Layout>
    );
}

/**
 * Get the project detail page props
 *
 * @param context The context of the request
 * @returns {Promise<{props: {project: string}} | {notFound: boolean}>} The project detail page props
 */
export async function getServerSideProps(context: any) {
    // Get the project ID
    const { projectID } = context.params;

    // Loop through the project files until a project with the correct ID is found
    const projectFiles = readdirSync("src/data/projects");
    let project = projectFiles
        .filter((file) => file !== "_Template.ts")
        .map((file) => {
            // Load the typescript file
            let project = require(`../../data/projects/${file}`).default;

            return project;
        })
        .find((project) => project.id === projectID);

    // If no project, render the 404 page
    if (!project) return { notFound: true };

    return {
        props: { _project: JSON.stringify(project) },
    };
}
