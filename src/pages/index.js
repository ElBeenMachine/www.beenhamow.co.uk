import { Inter } from "next/font/google";
import PageLoader from "@/components/PageLoader";
import Navigation from "@/components/NavBar";
import Hero from "@/components/Hero";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <main>
            <PageLoader />
            <Navigation />
            <div id={"page-content"} className={"mt-20 w-full px-64"}>
                <Hero />
            </div>
        </main>
    );
}
