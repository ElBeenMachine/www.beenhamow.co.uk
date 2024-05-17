import { ProjectStructureProps } from "@/interfaces/Project.interface";

export default <ProjectStructureProps>{
    id: "472-squadron-website",
    title: "472 Squadron Website",
    summary: "The website for an RAF Air Cadet squadron based on the Wirral.",

    description: `This project represents my first venture into using NextJS for a client project. The client being my local Royal Air Force Air Cadets (RAFAC) squadron, the objective was to create a captivating webpage that effectively communicates the cadet experience.  NextJS, with its server-side rendering capabilities, emerged as the ideal choice for this project. This framework not only enhances performance but also ensures optimal search engine indexing, a crucial factor for the squadron's online visibility.

    To expedite development and achieve a visually appealing design, I opted to leverage ChakraUI's component library.  ChakraUI's rich collection of accessible and responsive components offered a springboard for crafting the user interface. This not only streamlined the development process but also guaranteed a consistent and modern aesthetic that aligns with the professional image of the RAFAC organization. Vanilla CSS was used strategically to customize specific design elements and personalize the webpage to reflect the squadron's unique identity.

    Deployment of the webpage is handled by Vercel, a serverless platform renowned for its user-friendliness and automated workflows.  A dedicated GitHub pipeline automates the deployment process, ensuring seamless updates whenever code modifications are made.  This project not only served as a valuable learning experience for me but also continues to be a maintained resource for the squadron, providing prospective cadets and their families with essential information.`,

    technologies: ["Next.JS", "JavaScript", "React", "Chakra UI", "Vercel"],
    website: "https://www.472squadron.com",
    github: "https://github.beenhamow.co.uk/www.472squadron.com",
    repoName: "ElBeenMachine/www.472squadron.com",
    image: "/img/projects/cadets-site.png",
    date: new Date("2023-05-23"),
};
