import { useEffect } from "react";
import SectionTitle from "./SectionTitle";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

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
            className={
                "min-h-[calc(100vh-40px)] lg:max-w-[80%] overflow-x-hidden"
            }
        >
            <CenteredPageSection title={title} index={index} />
            {children}
        </motion.section>
    );
}

export default CenteredPageSection;
