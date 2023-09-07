import Head from "next/head";

function Layout({ children, title = "Page Title" }) {
    return (
        <div className={"bg-my-cyan-900 min-h-screen"}>
            <Head>
                <title>{title}</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossorigin
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Varela+Round&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <main>{children}</main>
        </div>
    );
}

export default Layout;
