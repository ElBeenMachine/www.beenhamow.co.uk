import About from "@/components/Home/About";
import Hero from "@/components/Home/Hero";
import ProjectShowcase from "@/components/Home/Projects";
import Technologies from "@/components/Home/Technologies";
import MyWork from "@/components/Home/Work";
import Layout from "@/components/Layout/MasterLayout";

/**
 * The home page
 *
 * @returns {JSX.Element} The home page
 */
export default function Home() {
    return (
        <Layout>
            <Hero />
            <About />
            <Technologies />
            <ProjectShowcase />
            <MyWork />
        </Layout>
    );
}
