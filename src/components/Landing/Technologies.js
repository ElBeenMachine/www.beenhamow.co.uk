import { Technologies } from "@/config";
import TechCard from "../Cards/TechCard";

function Technlolgies() {
    const data = Technologies.sort((a, b) => a.name - b.name);
    return (
        <div className={"mb-16"}>
            <h1 className={"text-4xl pb-5"}>My technologies</h1>
            <div className={"flex justify-start flex-wrap"}>
                {data.map((tech) => (
                    <TechCard
                        key={tech.name}
                        name={tech.name}
                        image={tech.image}
                    />
                ))}
            </div>
        </div>
    );
}

export default Technlolgies;
