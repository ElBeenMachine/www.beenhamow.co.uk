function NavBarLink({ children, href, target = "_self" }) {
    return (
        <a
            href={href}
            target={target}
            className={
                "mx-6 text-md sm:text-lg hover:text-my-cyan-200 transition-all"
            }
        >
            {children}
        </a>
    );
}

function Navbar() {
    return (
        <div
            className={
                "w-full h-20 py-4 px-10 flex items-center justify-center md:justify-start transition-all"
            }
        >
            <NavBarLink href={"/"}>home</NavBarLink>
            <NavBarLink href={"/projects"}>projects</NavBarLink>
            <NavBarLink href={"/contact"}>contact</NavBarLink>
        </div>
    );
}

export default Navbar;
