import FeaturedProjects from "@/components/Landing/FeaturedProjects";
import Hero from "@/components/Landing/Hero";
import Technlolgies from "@/components/Landing/Technologies";
import Footer from "@/components/Layout/Footer";
import Layout from "@/components/Layout/Layout";
import Navbar from "@/components/Layout/Navbar";

export default function Home() {
    return (
        <Layout title="Ollie B">
            <Navbar />
            <div className={"mx-10 md:px-6"}>
                <Hero />
                <FeaturedProjects />
                <Technlolgies />
                <Footer />
            </div>
        </Layout>
    );
}
