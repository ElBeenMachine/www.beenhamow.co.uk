import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Container from "../Layout/Container";

import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoTypescript, BiLogoMongodb } from "react-icons/bi";
import { SiExpress, SiMicrosoftazure, SiMicrosoftexchange, SiGoogleappsscript } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { FaJava, FaReact, FaPython } from "react-icons/fa";
import { GrDocker } from "react-icons/gr";

const technologies = [
    [
        { name: "JavaScript", icon: IoLogoJavascript, color: "#F1DD35" },
        { name: "TypeScript", icon: BiLogoTypescript, color: "#3178C6" },
        { name: "Java", icon: FaJava, color: "#F89820" },
    ],
    [
        { name: "React", icon: FaReact, color: "#61DAFB" },
        { name: "NextJS", icon: RiNextjsFill, color: "#FFFFFF" },
        { name: "Express", icon: SiExpress, color: "#FFFFFF" },
    ],
    [
        { name: "Azure", icon: SiMicrosoftazure, color: "#0078d4" },
        { name: "Python", icon: FaPython, color: "#FFD343" },
        { name: "Docker", icon: GrDocker, color: "#1D63ED" },
    ],
    [
        { name: "MongoDB", icon: BiLogoMongodb, color: "#00ED64" },
        { name: "Exchange", icon: SiMicrosoftexchange, color: "#0078d4" },
        { name: "Google Apps Script", icon: SiGoogleappsscript, color: "#0F9D58" },
    ],
];

function TechnologyCarousel() {
    return (
        <Carousel autoPlay infiniteLoop showThumbs={false} showArrows={true} showStatus={false} swipeable={true}>
            {technologies.map((stack, index) => (
                <div key={index} className="w-full h-max flex justify-center items-center py-5 select-none flex-wrap md:flex-nowrap">
                    {stack.map((tech, index) => (
                        <div key={index} className="h-52 md:h-80 w-full text-center items-center justify-center flex flex-col gap-5 mx-5">
                            {tech.icon && <tech.icon size={100} color={tech.color} />}
                            <p className="text-2xl font-bold">{tech.name}</p>
                        </div>
                    ))}
                </div>
            ))}
        </Carousel>
    );
}

export default function Technologies() {
    return (
        <div className="w-full" id={"technologies"}>
            <Container>
                <h1 className="text-4xl font-bold mb-10">Technologies</h1>
                <p>See below a list of technologies that I have used in my projects.</p>
                <TechnologyCarousel />
            </Container>
        </div>
    );
}
