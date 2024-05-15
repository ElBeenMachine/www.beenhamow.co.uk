import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Container from "../Layout/Container";
import { technologies } from "@/data/technologies";

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
