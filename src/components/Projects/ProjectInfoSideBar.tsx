import { ProjectStructureProps } from "@/interfaces/Project.interface";
import getLastModified from "@/utils/GetProjectLastUpdated";
import moment from "moment";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CiGlobe } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

interface ProjectInfoSideBarProps {
    project: ProjectStructureProps;
}

/**
 * The project info sidebar
 *
 * @param {ProjectInfoSideBarProps} props The project info sidebar props
 * @returns {JSX.Element} The project info sidebar
 */
export default function ProjectInfoSideBar({ project }: ProjectInfoSideBarProps) {
    const [updatedProject, setUpdatedProject] = useState<ProjectStructureProps | null>(null);

    useEffect(() => {
        getLastModified(project).then((project) => setUpdatedProject(project));
    }, []);

    return (
        <div className="w-full md:w-max">
            <h1 className="text-4xl font-bold">{updatedProject?.title}</h1>
            <p className="text-accent text-light text-xs mt-2">
                Last updated: {moment(updatedProject?.date).format("DD/MM/YY")} ({moment(updatedProject?.date).fromNow()})
            </p>
            <p className="text-gray-400 text-sm mt-5 md:max-w-80">{updatedProject?.summary}</p>
            <div className="mt-5">
                {updatedProject?.github && (
                    <Link href={updatedProject?.github} target="_blank" className="mt-2 block hover:text-gray-400 transition-all">
                        <FaGithub size={20} className="inline-block mr-2" /> {updatedProject?.repoName}
                    </Link>
                )}
                {updatedProject?.website && (
                    <Link href={updatedProject?.website} target="_blank" className="mt-2 block hover:text-gray-400 transition-all">
                        <CiGlobe size={20} className="inline-block mr-2" /> {updatedProject?.website.replace("https://", "").split("/")[0]}
                    </Link>
                )}
            </div>
        </div>
    );
}
