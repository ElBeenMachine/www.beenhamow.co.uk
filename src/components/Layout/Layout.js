import Head from "next/head";
import { useRouter } from "next/router";

function Layout({
    children,
    title = "Page Title",
    description = "A portfolio showing demonstrating my programming ability across a variety of projects.",
    image = "https://www.beenhamow.co.uk/img/logos/bean.png",
    url,
}) {
    const router = useRouter();
    if (!url) url = `https://www.beenhamow.co.uk${router.pathname}`;

    return (
        <div className={"bg-my-cyan-900 min-h-screen"}>
            <Head>
                {/* <!-- HTML Meta Tags --> */}
                <title>{title}</title>
                <meta name="description" content={description} />

                {/* <!-- Google / Search Engine Tags --> */}
                <meta itemProp="name" content={title} />
                <meta itemProp="description" content={description} />
                <meta itemProp="image" content={image} />

                {/* <!-- Facebook Meta Tags --> */}
                <meta property="og:url" content={url} />
                <meta property="og:type" content="website" />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:image" content={image} />

                {/* <!-- Twitter Meta Tags --> */}
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:image" content={image} />

                <meta name="theme-color" content="#00FFFF"></meta>

                <meta charSet="UFT-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />

                <link
                    ref="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
                />
            </Head>
            <main>{children}</main>
        </div>
    );
}

export default Layout;
