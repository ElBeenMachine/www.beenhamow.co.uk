import CenteredPageSection from "../Parts/CenteredSection";
import ProjectCard from "./ProjectCard";
import projects from "@/projects";

function ProjectsSection() {
    const Projects = projects.filter((x) => {
        return x.featured == true;
    });

    console.log(projects);

    return (
        <CenteredPageSection
            id={"featured-projects"}
            index={"02"}
            title={"Some of My Work"}
        >
            {Projects.map((project, index) => (
                <ProjectCard
                    key={project.title}
                    title={project.title}
                    description={project.description}
                    technologies={project.technologies}
                    image={project.image}
                    href={project.href}
                    inverted={index % 2 !== 0}
                />
            ))}
        </CenteredPageSection>
    );
}

export default ProjectsSection;
