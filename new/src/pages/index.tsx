import About from "@/components/Home/About";
import Hero from "@/components/Home/Hero";
import Layout from "@/components/Layout/MasterLayout";

export default function Home() {
    return (
        <Layout>
            <Hero />
            <About />
        </Layout>
    );
}
