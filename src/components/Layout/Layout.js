import Head from "next/head";

function Layout({ children, title = "Page Title" }) {
    return (
        <div className={"bg-my-cyan-900 min-h-screen"}>
            <Head>
                <title>{title}</title>
            </Head>
            <main>{children}</main>
        </div>
    );
}

export default Layout;
