import Container from "../Layout/Container";

export default function About() {
    return (
        <div className="min-h-[100dvh] flex justify-center items-center" id={"about"}>
            <Container>
                <div className={"w-full flex gap-10 justify-between"}>
                    <div className="w-full">
                        <h1 className="text-4xl font-bold mb-5">About Me</h1>
                        <p className={"mb-6"}>
                            Hi there, I'm <span className={"text-[#00ffffff]"}>Ollie</span> and I enjoy creating things that live on the web and in the cloud. My interest in programming really emerged
                            back in <span className={"text-[#00ffffff]"}>2016</span> when I created my first project in <span className={"text-[#00ffffff]"}>Python</span>.
                        </p>
                        <p className={"mb-6"}>
                            Since then, I've been working on boilerplate projects, and have created a number of automation processes, saving countless hours at a multi-national company.
                        </p>
                        <p className={"mb-6"}>Here are some of the technologies I use on a day-to-day basis:</p>
                        <ul className={"flex flex-col flex-wrap max-h-20 arrowList"}>
                            <li>JavaScript</li>
                            <li>Typescript</li>
                            <li>Java</li>
                            <li>Python</li>
                            <li>Express</li>
                            <li>React</li>
                            <li>Next.js</li>
                            <li>Azure</li>
                            <li>MongoDB</li>
                        </ul>
                    </div>
                    <div className="hidden md:flex w-full justify-center items-center flex-grow">
                        <img src="/img/about.svg" alt="About Me" className="max-w-[400px]" />
                    </div>
                </div>
            </Container>
        </div>
    );
}
