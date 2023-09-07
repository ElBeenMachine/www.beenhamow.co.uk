import Hero from "@/components/Landing/Hero";
import Layout from "@/components/Layout/Layout";
import Navbar from "@/components/Layout/Navbar";

export default function Home() {
    return (
        <Layout title="Ollie B">
            <Navbar />
            <div className={"mx-10 px-6"}>
                <Hero />
            </div>
        </Layout>
    );
}
