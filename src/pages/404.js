import Footer from "@/components/Layout/Footer";
import Layout from "@/components/Layout/Layout";
import Navbar from "@/components/Layout/Navbar";

export default function Error404() {
    return (
        <Layout title={"404 | Not Found"}>
            <Navbar />
            <div className={"mx-10 md:px-6"}>
                <div
                    className={
                        "w-full h-[calc(100vh-80px)] flex justify-center items-center flex-col p-10 text-center"
                    }
                >
                    <h1 className={"text-4xl font-semibold mb-7"}>Error 404</h1>
                    <p className={"max-w-xl mb-7"}>
                        The page or resource that you are looking for either
                        does not exist or has been moved to a new location.
                    </p>
                    <a
                        className={
                            "block w-max bg-my-cyan-400 hover:bg-my-cyan-300 transition-all px-5 py-3 rounded-md"
                        }
                        href={"/"}
                    >
                        Go Home
                    </a>
                </div>
                <Footer />
            </div>
        </Layout>
    );
}
