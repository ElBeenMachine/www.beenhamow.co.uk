function HeroSide({ children }) {
    return <div className={"w-full lg:w-[50%]"}>{children}</div>;
}

function TagLine() {
    return (
        <div className={"flex flex-col"}>
            <h1 className={"text-4xl md:text-5xl font-semibold pb-10"}>
                Hi! I'm Ollie
            </h1>
            <p className={"pb-10 max-w-2xl"}>
                I'm a UK-based university student studying software engineering,
                with a strong interest in web development and networking.
            </p>
            <a
                href={"https://github.com/ElBeenMachine"}
                target={"_blank"}
                className={
                    "block w-max bg-my-cyan-400 hover:bg-my-cyan-300 transition-all px-5 py-3 rounded-md"
                }
            >
                Find Me On GitHub
            </a>
        </div>
    );
}

function Hero() {
    return (
        <div
            className={
                "h-[calc(100vh-80px)] flex flex-col lg:flex-row justify-center flex-nowrap items-center"
            }
        >
            <HeroSide>
                <TagLine />
            </HeroSide>
            <HeroSide>
                <div
                    className={
                        "justify-center items-center h-full hidden lg:flex px-5"
                    }
                >
                    <img
                        className={"w-full max-w-xl animate-float"}
                        src={"/img/landing/hero.svg"}
                    />
                </div>
            </HeroSide>
        </div>
    );
}

export default Hero;
