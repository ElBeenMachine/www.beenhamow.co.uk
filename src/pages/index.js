import { Inter } from "next/font/google";
import PageLoader from "@/components/PageLoader";
import Navigation from "@/components/NavBar";
import Hero from "@/components/Sections/Hero";
import Head from "next/head";
import AboutSection from "@/components/Sections/About";
import ProjectsSection from "@/components/Sections/Projects/Projects";

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
                        "w-full px-5 md:px-40 2xl:px-80 flex flex-col items-center justify-center"
                    }
                >
                    <Hero />
                    <AboutSection />
                    <ProjectsSection />
                </div>
            </main>
        </>
    );
}
