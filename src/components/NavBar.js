function NavLink({ children, href, target = "_self" }) {
    return (
        <a
            href={href}
            target={target}
            className={
                "h-full w-auto ml-4 flex items-center transition-all hover:text-[#00ffff]"
            }
        >
            {children}
        </a>
    );
}

function Navigation() {
    return (
        <div
            className={
                "h-20 w-full relative flex justify-center md:justify-between items-center px-10 py-5 top-0"
            }
            id={"nav"}
        >
            <div className={"h-full"}>
                <img
                    className={"h-full w-auto"}
                    src={"/img/logo.svg"}
                    alt={"logo"}
                />
            </div>
            <div className={"h-full w-max justify-end hidden md:flex"}>
                <NavLink href={"/#about"}>
                    <span className={"text-[#00ffff] mr-2"}>01.</span>About Me
                </NavLink>
                <NavLink href={"/#featured-projects"}>
                    <span className={"text-[#00ffff] mr-2"}>02.</span>Projects
                </NavLink>
                <NavLink href={"/#contact"}>
                    <span className={"text-[#00ffff] mr-2"}>03.</span>Contact Me
                </NavLink>
                <NavLink href={"https://blog.beenhamow.co.uk"} target="_blank">
                    <span className={"text-[#00ffff] mr-2"}>04.</span>Blog
                </NavLink>
            </div>
        </div>
    );
}

export default Navigation;
