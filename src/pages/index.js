import FeaturedProjects from "@/components/Landing/FeaturedProjects";
import Hero from "@/components/Landing/Hero";
import Layout from "@/components/Layout/Layout";
import Navbar from "@/components/Layout/Navbar";

export default function Home() {
    return (
        <Layout title="Ollie B">
            <Navbar />
            <div className={"mx-10 md:px-6"}>
                <Hero />
                <FeaturedProjects />
            </div>
        </Layout>
    );
}
