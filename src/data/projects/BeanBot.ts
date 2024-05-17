import { ProjectStructureProps } from "@/interfaces/Project.interface";

export default <ProjectStructureProps>{
    id: "bean-bot",
    title: "Bean Bot",
    summary: "A multi-purpose Discord bot featuring a variety of commands and features, including music, moderation, and more.",

    description: `This project highlights my development of a versatile Discord bot using NodeJS and the discord.js library. My focus was on building a dynamic and responsive user experience through a comprehensive event and command handler.

    The handler serves as the central nervous system of the bot, efficiently processing user interactions and bot events. This allows for features like moderation commands, general-use utilities, and the star attraction – music integration with Spotify.

    The music integration elevates the bot's functionality. Users can seamlessly play their personal playlists stored on Spotify, allowing them to share their music with all participants in a Discord voice channel.

    Finally, the project prioritizes user control.  The bot is containerized using Docker, allowing users to effortlessly host their own instance. Additionally, updates are automated – whenever the production branch is pushed, the Docker image rebuilds and publishes to Docker Hub. This empowers users with greater control over the bot's integration within their Discord server environment.

    In essence, this project showcases my ability to design and implement a feature-rich Discord bot that leverages modern libraries and APIs to provide valuable moderation tools alongside a unique, user-driven music experience.`,

    technologies: ["JavaScript", "Discord.js", "Docker", "CI/CD"],
    github: "https://github.beenhamow.co.uk/bean-bot",
    repoName: "ElBeenMachine/bean-bot",
    image: "/img/projects/bean-bot.png",
    date: new Date("2023-05-24"),
};
