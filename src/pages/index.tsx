import About from "@/components/Home/About";
import Hero from "@/components/Home/Hero";
import Technologies from "@/components/Home/Technologies";
import MyWork from "@/components/Home/Work";
import Layout from "@/components/Layout/MasterLayout";

export default function Home() {
    return (
        <Layout>
            <Hero />
            <About />
            <Technologies />
            <MyWork />
        </Layout>
    );
}
