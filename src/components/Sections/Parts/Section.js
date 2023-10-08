import { useEffect } from "react";
import SectionTitle from "./SectionTitle";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const sectionVariants = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0 },
};

function PageSection({ children, id, title, index }) {
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
            className={"min-h-[calc(100vh-40px)]"}
        >
            <SectionTitle title={title} index={index} />
            {children}
        </motion.section>
    );
}

export default PageSection;
