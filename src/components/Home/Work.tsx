import Container from "../Layout/Container";
import { WorkCardProps } from "@/interfaces/WorkCard.interface";
import { WorkData } from "@/data/work";
import Link from "next/link";
import { formatDescription } from "@/utils/DescriptionFormatter";

/**
 * A component to display a work card
 *
 * @param {WorkCardProps} props The properties of the WorkCard component
 * @returns
 */
function WorkCard({ title, description, dates, image, url }: WorkCardProps) {
    return (
        <div className="w-full my-5 flex flex-col md:flex-row items-center md:items-start">
            <img src={image} alt={title} className="w-32 h-32 md:w-40 md:h-40 mb-10 md:mb-0 rounded-full object-cover object-center" />
            <div className="w-full md:ml-10">
                <h2 className={"text-2xl font-bold"}>{title}</h2>
                <p className={"text-md text-gray-400 font-medium"}>{dates}</p>
                {url && (
                    <Link href={url} target="_blank" className="text-gray-500 font-medium hover:underline">
                        {url.split("https://")[1]}
                    </Link>
                )}
                <p className={"text-sm text-justify mt-3"}>{formatDescription(description)}</p>
            </div>
        </div>
    );
}

export default function MyWork() {
    return (
        <div className="min-h-[100dvh] flex justify-center items-center my-20" id={"my-work"}>
            <Container>
                <h1 className="text-4xl font-bold mb-10">My Work</h1>
                <div className={"flex flex-col gap-10"}>
                    {WorkData.map((work, index) => (
                        <WorkCard key={index} title={work.title} description={work.description} dates={work.dates} image={work.image} url={work.url} />
                    ))}
                </div>
            </Container>
        </div>
    );
}
