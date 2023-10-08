import PageSection from "./Parts/Section";

function AboutSection() {
    return (
        <PageSection id={"about"} index={"01"} title={"About Me"}>
            <div className={"flex justify-center flex-wrap items-center"}>
                <div className={"w-full lg:w-[50%]"}>
                    <p className={"mb-6"}>
                        Hi there, I'm{" "}
                        <span className={"text-[#00ffffff]"}>Ollie</span> and I
                        enjoy creating things that live on the web and in the
                        cloud. My interest in programming really emerged back in{" "}
                        <span className={"text-[#00ffffff]"}>2016</span> when I
                        created my first project in{" "}
                        <span className={"text-[#00ffffff]"}>Python</span>.
                    </p>
                    <p className={"mb-6"}>
                        Since then, I've been working on boilerplate projects,
                        and have created a number of automation processes,
                        saving countless hours at a multi-national company.
                    </p>
                    <p className={"mb-6"}>
                        Here are some of the technologies I use on a day-to-day
                        basis:
                    </p>
                    <ul className={"flex flex-col flex-wrap max-h-20"}>
                        <li>JavaScript</li>
                        <li>Express</li>
                        <li>React</li>
                        <li>Next.js</li>
                        <li>AWS</li>
                        <li>MongoDB</li>
                    </ul>
                </div>
                <div className={"w-full lg:w-[50%]"}></div>
            </div>
        </PageSection>
    );
}

export default AboutSection;
