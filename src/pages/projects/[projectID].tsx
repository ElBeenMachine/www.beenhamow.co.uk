import Container from "@/components/Layout/Container";
import Layout from "@/components/Layout/MasterLayout";
import ProjectInfoSideBar from "@/components/Projects/ProjectInfoSideBar";
import { ProjectStructureProps } from "@/interfaces/Project.interface";
import { formatDescription } from "@/utils/DescriptionFormatter";
import { readdirSync } from "fs";
import { loremIpsum } from "lorem-ipsum";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

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

    return (
        <Layout pageTitle={project.title} pageDescription={project.summary}>
            <Container>
                <Link href={"/projects"} target={"_self"} className={"mt-5 mb-2 flex items-center transition-all group hover:text-accent w-max font-normal text-md"}>
                    <FaArrowLeft className={"inline mr-3 group-hover:-translate-x-1 transition-all text-accent"} /> Back
                </Link>
                <div className={"flex flex-wrap md:flex-nowrap mb-10 gap-5"}>
                    <ProjectInfoSideBar project={project} />
                    <div className="w-full md:w-2/3">{project.description && formatDescription(project.description)}</div>
                </div>
            </Container>
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
