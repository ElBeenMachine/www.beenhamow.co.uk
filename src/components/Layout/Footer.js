function FooterLink({ children, href, target = "_self" }) {
    return (
        <a
            href={href}
            target={target}
            className={
                "mx-6 text-sm sm:text-md hover:text-my-cyan-200 transition-all"
            }
        >
            {children}
        </a>
    );
}

function Footer() {
    return (
        <div className={"py-10"}>
            <hr className={"mb-10"}></hr>
            <div
                className={
                    "w-full h-20 py-4 px-10 flex items-center justify-center transition-all"
                }
            >
                <FooterLink href={"/"}>home</FooterLink>
                <FooterLink href={"/projects"}>projects</FooterLink>
                <FooterLink href={"/contact"}>contact</FooterLink>
            </div>
        </div>
    );
}

export default Footer;
