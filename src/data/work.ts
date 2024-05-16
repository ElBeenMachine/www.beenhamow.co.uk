import { WorkCardProps } from "@/interfaces/WorkCard.interface";

export const WorkData = [
    {
        title: "Internal Processes for WeDoPlay",
        dates: "2022 - Present",
        description: `At WeDoPlay, I was tasked with creating a number of internal systems and processes to ease the workload of my colleagues nationwide. These systems included a number of autommations to be used in day-to-day tasks, as well as some completely autonomous tasks that ran in the background to communicate vital information to guests. `,
        image: "/img/work/wedoplay.jpg",
        url: "https://www.wedoplay.co.uk",
    },
    {
        title: "On-Premises Identity Management for 472 (Hoylake and West Kirby) Squadron ATC",
        dates: "2020 - 2022",
        description: `During my time as IT Officer at 472 Squadron ATC, I was tasked with setting up and maintaining the IT infrastructure for use by cadets and staff. Using the hardware available to me, I created a active directory domain controller, ad well as a backup domain controller and a file server to allow for secure access to resources. The domain controllers were set up using Windows Server 2019 and the file server was set up using TrueNas. 
            
        The domain controller was used to manage user accounts and permissions for the squadron's PCs and laptops and the file server was used to store resources and documents for the squadron. The setup allowed for secure access to resources and the ability to manage user accounts and permissions centrally.`,
        image: "/img/work/472sqn.jpg",
        url: "https://www.472squadron.com",
    },
    {
        title: "Website for 472 (Hoylake and West Kirby) Squadron ATC",
        dates: "2020",
        description:
            "I was tasked with creating a website for my local Air Training Corps squadron. The website was my introduction into creating a real-world solution for a client. It was created using React and NextJS and uses pre-built components provided by ChakraUI. The website was designed to provide a user-friendly and attractive introduction to the Air Training Corps as well as highlighting the activities and opportunities available to cadets. The website is hosted on Vercel and is updated upon request from squadron staff.",
        image: "/img/work/472sqn.jpg",
        url: "https://www.472squadron.com",
    },
] as WorkCardProps[];
