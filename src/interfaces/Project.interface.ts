export interface ProjectStructureProps {
    id: string;
    title: string;
    summary: string;
    description: string;
    technologies: string[];
    website?: string;
    github: string;
    image: string;
    date: Date;
}
