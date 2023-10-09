import { useEffect, useState } from "react";

const links = [];

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
                "h-20 w-full relative flex justify-between items-center px-10 py-5 top-0"
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
            <div className={"flex-grow"} />
            <div className={"h-full w-max justify-end hidden md:flex"}>
                <NavLink href={"/#about"}>
                    <span className={"text-[#00ffff] mr-2"}>01.</span>About Me
                </NavLink>
                <NavLink href={"/#experience"}>
                    <span className={"text-[#00ffff] mr-2"}>02.</span>Experience
                </NavLink>
                <NavLink href={"#"}>
                    <span className={"text-[#00ffff] mr-2"}>03.</span>Projects
                </NavLink>
                <NavLink href={"#"}>
                    <span className={"text-[#00ffff] mr-2"}>04.</span>Contact Me
                </NavLink>
            </div>
        </div>
    );
}

export default Navigation;
