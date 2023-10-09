import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CenteredSectionTitle from "./CenteredSectionTitle";

const sectionVariants = {
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.75 } },
    hidden: { opacity: 0, scale: 0.95, y: 50 },
};

function CenteredPageSection({ children, id, title, index }) {
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
        <motion.section
            ref={ref}
            variants={sectionVariants}
            animate={controls}
            initial={"hidden"}
            id={id}
            className={"pt-24 mt-5 max-w-[100%] lg:w-[80%] overflow-x-hidden"}
        >
            <CenteredSectionTitle title={title} index={index} />
            {children}
        </motion.section>
    );
}

export default CenteredPageSection;
