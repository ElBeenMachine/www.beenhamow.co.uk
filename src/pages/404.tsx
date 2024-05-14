import Container from "@/components/Layout/Container";
import Layout from "@/components/Layout/MasterLayout";
import Link from "next/link";

export default function Error404Page() {
    return (
        <Layout pageTitle="Not Found">
            <div className={"h-[calc(100dvh-160px)] mb-[80px] flex justify-center items-center"}>
                <Container>
                    <div className={"flex justify-center items-center flex-col gap-5"}>
                        <h1 className={"text-5xl font-bold mb-5"}>Oops!</h1>
                        <p className={"text-center max-w-[500px]"}>The page or resource that you have requested is no longer available or has been moved.</p>
                        <Link href={"/"} className={"transition-all text-[#00ffff] font-semibold border rounded-md border-[#00ffff] px-6 py-2 hover:text-[#303030] hover:bg-[#00ffff] "}>
                            Go Home
                        </Link>
                    </div>
                </Container>
            </div>
        </Layout>
    );
}
