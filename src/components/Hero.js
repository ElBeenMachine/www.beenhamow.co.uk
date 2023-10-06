function Hero() {
    return (
        <div
            className={
                "flex flex-col justify-center items-start h-[calc(100vh-160px)]"
            }
        >
            <h3
                className={"text-[#00ffff] font-bold text-lg mb-8 big-header"}
                style={{ animationDelay: "4100ms" }}
            >
                Hi, my name is
            </h3>
            <h1
                className={"text-gray-100 font-black text-5xl mb-2 big-header"}
                style={{ animationDelay: "4200ms" }}
            >
                Ollie Beenham.
            </h1>
            <h2
                className={"text-gray-300 font-black text-5xl mb-8 big-header"}
                style={{ animationDelay: "4300ms" }}
            >
                I build things for the web.
            </h2>
            <p
                className={"max-w-md text-gray-300 mb-8 big-header"}
                style={{ animationDelay: "4400ms" }}
            >
                I am a university studying software engineering. I am currently
                working on creating experiences and automations with a
                human-centered design.
            </p>

            <button
                onClick={() =>
                    window.open("https://github.beenhamow.co.uk", "_blank")
                }
                className={
                    "transition-all text-[#00ffff] font-semibold border rounded-md border-[#00ffff] px-8 py-4 hover:text-gray-100 hover:bg-[#00ffff] big-header"
                }
                style={{ animationDelay: "4500ms" }}
            >
                Check Out My GitHub!
            </button>
        </div>
    );
}

export default Hero;
