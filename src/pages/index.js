import { Inter } from "next/font/google";
import PageLoader from "@/components/PageLoader";
import Navigation from "@/components/NavBar";
import Hero from "@/components/Sections/Hero";
import Head from "next/head";
import AboutSection from "@/components/Sections/About";
import ExperienceSection from "@/components/Sections/Experience";

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
                    className={
                        "w-full px-20 xl:px-80 flex flex-col items-center justify-center"
                    }
                >
                    <Hero />
                    <AboutSection />
                    <ExperienceSection />
                </div>
            </main>
        </>
    );
}
