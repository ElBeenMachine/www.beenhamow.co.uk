import { ProjectStructureProps } from "@/interfaces/Project.interface";

export default <ProjectStructureProps>{
	id: "homelab",
	title: "My Homelab",
	summary:
		"My homelab - A self-hosted environment for learning and development.",

	description: `I have built a homelab project comprising two virtual environments, one of which includes a NAS (Network Attached Storage) and several development environments and labs where I am teaching myself Kubernetes and other best practices. Additionally, I have created a Kubernetes cluster hosting several websites and web services.
    
    All the above can be accessed remotely through a Zero trust implementation using Cloudflare tunnels and Microsoft Entra ID for authentication.
    
    Through my homelab implementation, I have also been teaching myself infrastructure as code, using Terraform and Ansible to automate the deployment of my environments and services. I have also been using CI/CD pipelines to automate the deployment of my websites to a locally hosted kubernetes cluster.
    
    More information regarding this project can be found on my GitHub page.`,

	technologies: [
		"Docker",
		"Ansible",
		"Terraform",
		"Kubernetes",
		"CI/CD",
		"Virtualisation",
		"Networking",
		"DNS/DHCP",
	],
	website: undefined,
	github: "https://github.beenhamow.co.uk/homelab",
	repoName: "ElBeenMachine/homelab",
	image: "https://joekarlsson.com/wp-content/uploads/2023/09/DALL·E-2023-09-26-12.56.21-An-homelab-server-in-the-style-of-vaporwave-style.jpg",
	date: new Date("2004-03-17"),
};
