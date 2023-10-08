import { Inter } from "next/font/google";
import PageLoader from "@/components/PageLoader";
import Navigation from "@/components/NavBar";
import Hero from "@/components/Sections/Hero";
import Head from "next/head";
import AboutSection from "@/components/Sections/About";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <>
            <Head>
                <link rel="icon" href="/img/logo.svg" />
                <title>Ollie B | Portfolio</title>
            </Head>
            <main>
                <PageLoader />
                <Navigation />
                <div
                    id={"page-content"}
                    className={"mt-20 w-full px-20 lg:px-80"}
                >
                    <Hero />
                    <AboutSection />
                </div>
            </main>
        </>
    );
}
