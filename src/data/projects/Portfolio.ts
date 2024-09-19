import { ProjectStructureProps } from "@/interfaces/Project.interface";

export default <ProjectStructureProps>{
	id: "my-portfolio",
	title: "Personal Portfolio",
	summary: "This very website...",

	description: `My portfolio, hosted at www.beenhamow.co.uk, is designed to showcase some of the projects that I have worked on, both inside of my studies, and my free time. It is created in TypeScript, using the next.js library, as well as Tailwind CSS. 

    I have utilised CI/CD pipelines to publish the website to my private azure container registry, and then to update the image on my personal Kubernetes cluster, ensuring the latest version of the website is always being served. While not complete, I am also developing a dashboard which will allow me to update the contents of the website without having to update the code, using persistent hosted database storage. 
`,

	technologies: [
		"Next.JS",
		"TypeScript",
		"React",
		"TailwindCSS",
		"CI/CD",
		"Docker",
	],
	website: "https://www.beenhamow.co.uk",
	github: "https://github.beenhamow.co.uk/www.beenhamow.co.uk",
	repoName: "ElBeenMachine/www.beenhamow.co.uk",
	image: "/img/meta/default.png",
	date: new Date("2004-03-17"),
};
