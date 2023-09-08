import Layout from "@/components/Layout/Layout";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import MyProjects from "@/components/Projects/Projects";

function Projects() {
    return (
        <Layout title={"My Projects | Ollie B"}>
            <Navbar />
            <div className={"mx-10 md:px-6 mt-10"}>
                <MyProjects />
                <Footer />
            </div>
        </Layout>
    );
}

export default Projects;
