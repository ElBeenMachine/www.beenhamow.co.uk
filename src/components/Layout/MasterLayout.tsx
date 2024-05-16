import Head from "next/head";
import Navbar from "./NavBar";
import Footer from "./Footer";
import GoogleAnalytics from "../Analytics";

interface LayoutProps {
    children?: React.ReactNode;
    pageTitle?: string;
    pageDescription?: string;
    pageImage?: string;
}

const defaultTitle = "Ollie Beenham";
const defaultDescription = "This website is home to a portfolio of projects and work completed by Ollie Beenham.";
const defaultImage = "https://www.beenhamow.co.uk/img/meta/default.png";

export default function Layout({ children, pageTitle, pageDescription, pageImage }: LayoutProps) {
    const title = pageTitle ? `${defaultTitle} | ${pageTitle}` : defaultTitle;
    const description = pageDescription ? pageDescription : defaultDescription;
    const image = pageImage ? `https://www.beenhamow.co.uk${pageImage}` : defaultImage;

    return (
        <div id={"page-viewport"}>
            <Head>
                {/* HTML Meta Tags */}
                <title>{title}</title>
                <meta name="description" content={description} />

                {/* Google / Search Engine Tags */}
                <meta itemProp="name" content={title} />
                <meta itemProp="description" content={description} />
                <meta itemProp="image" content={image} />

                {/* Facebook Meta Tags */}
                <meta property="og:url" content="https://www.beenhamow.co.uk" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:image" content={image} />

                {/* Twitter Meta Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:image" content={image} />

                {/* Page Icon */}
                <link rel="icon" href="/img/logo.svg" />
            </Head>
            <Navbar />
            <main>{children}</main>
            <Footer />
            <GoogleAnalytics />
        </div>
    );
}
