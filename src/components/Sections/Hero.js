/**
 * @author @ElBeenMachine
 */

function Hero() {
    return (
        <div className={"flex flex-col justify-center items-start h-[calc(100vh-80px)] w-full"}>
            <h3 className={"text-[#00ffff] font-bold text-lg mb-5 big-header"} style={{ animationDelay: "3100ms" }}>
                Hi, my name is
            </h3>
            <h1 className={"text-gray-50 font-black text-5xl lg:text-7xl mb-2 big-header"} style={{ animationDelay: "3200ms" }}>
                Ollie.
            </h1>
            <h2 className={"text-gray-300 font-black text-2xl lg:text-5xl mb-8 big-header"} style={{ animationDelay: "3300ms" }}>
                I build things for the web.
            </h2>
            <p className={"max-w-md text-gray-300 mb-8 big-header"} style={{ animationDelay: "3400ms" }}>
                I am a university student studying software engineering. I am currently working on creating experiences and automations with a human-centered design.
            </p>

            <button
                onClick={() => window.open("https://github.beenhamow.co.uk", "_blank")}
                className={"transition-all text-[#00ffff] font-semibold border rounded-md border-[#00ffff] px-8 py-4 hover:text-[#303030] hover:bg-[#00ffff] big-header"}
                style={{ animationDelay: "3500ms" }}
            >
                Check Out My GitHub!
            </button>
        </div>
    );
}

export default Hero;
