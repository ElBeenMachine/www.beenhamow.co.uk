import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const sectionVariants = {
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    hidden: { opacity: 0, x: 50 },
};

const invertedVariants = {
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    hidden: { opacity: 0, x: -50 },
};

function ProjectCard({
    title,
    description,
    technologies,
    image,
    inverted = false,
    href = null,
}) {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        } else {
            controls.start("hidden");
        }
    }, [controls, inView]);

    return (
        <motion.div
            ref={ref}
            variants={inverted ? invertedVariants : sectionVariants}
            animate={controls}
            initial={"hidden"}
            className={`h-full w-full overflow-x-hidden block relative my-20 overflow-hidden xl:flex justify-between items-center ${
                inverted
                    ? " text-right flex-row-reverse"
                    : " text-left flex-row"
            }`}
        >
            <div
                className={
                    "z-10 relative w-[100%] bg-[#1a2946]/80 xl:bg-[#ffffff]/0 p-7 lg:p-10 xl:p-0"
                }
            >
                <p className={"text-sm text-[#00ffff]"}>Featured Project</p>
                <h2 className={"text-xl lg:text-3xl font-bold mt-2 mb-5"}>
                    {title}
                </h2>
                <p
                    className={
                        "whitespace-pre-wrap w-full rounded-md xl:bg-[#1a2946] xl:p-5 text-sm lg:text-md"
                    }
                >
                    {description}
                </p>
                <p className={"whitespace-pre-wrap mt-3 opacity-50"}>
                    {technologies.join("      ")}
                </p>
            </div>
            <div
                className={`z-0 absolute top-0 left-0 w-full h-full xl:relative ${
                    inverted ? "xl:mr-[-30px]" : "xl:ml-[-30px]"
                } xl:mt-6 project-image`}
            >
                <img className={"h-full w-full object-cover"} src={image} />
            </div>
        </motion.div>
    );
}

export default ProjectCard;
