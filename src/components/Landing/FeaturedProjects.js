import { Projects } from "@/config";
import ProjectCard from "@/components/Cards/ProjectCard";

function FeaturedProjects() {
    const data = Projects.filter((x) => {
        return x.featured == true;
    });

    return (
        <div className={"mb-16"}>
            <h1 className={"text-4xl pb-5"}>Featured Projects</h1>
            <div className={"flex justify-start flex-wrap"}>
                {data.map((project) => (
                    <ProjectCard
                        name={project.name}
                        technologies={project.technologies}
                        thumb={`/api/getMeta?url=${project.url}`}
                        url={project.url}
                        key={project.name}
                    />
                ))}
            </div>
        </div>
    );
}

export default FeaturedProjects;
