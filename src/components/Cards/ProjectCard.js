function ProjectCard({
    name = "Untitled Project",
    technologies = [],
    url,
    thumb,
}) {
    return (
        <div
            className={
                "max-w-full lg:max-w-[calc(50%-20px)] xl:max-w-[calc(33%-20px)] flex flex-col pb-5 md:mr-5"
            }
            onClick={() => window.open(url, "_blank")}
        >
            <h2 className={"text-2xl pb-3"}>{name}</h2>
            <img
                src={thumb}
                className={
                    "w-full rounded-md h-auto object-cover object-center transition-all hover:opacity-80 cursor-pointer aspect-video bg-white"
                }
            />
            <div
                className={
                    "w-full flex flex-wrap justify-center items-center mt-5"
                }
            >
                {technologies.map((tech) => (
                    <p
                        className={
                            "text-sm md:text-md py-2 px-3 my-2 bg-black/70 rounded-full mx-1 md:mx-3"
                        }
                        key={tech}
                    >
                        {tech}
                    </p>
                ))}
            </div>
        </div>
    );
}

export default ProjectCard;
