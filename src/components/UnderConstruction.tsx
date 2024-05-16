import Link from "next/link";
import Container from "./Layout/Container";
import Image from "next/image";

export default function UnderConstructionCard() {
    return (
        <div className={"h-[calc(100dvh-160px)] mb-[80px] flex justify-center items-center"}>
            <Container>
                <div className={"flex justify-center items-center flex-col gap-5"}>
                    <Image src={"/img/under-construction.svg"} width={300} height={300} alt={"Under Construction"} />
                    <p className={"text-center max-w-[500px] my-5"}>This page is currently under construction, please come back soon.</p>
                    <Link href={"/"} className={"transition-all text-accent font-semibold border rounded-md border-accent px-6 py-2 hover:text-[#303030] hover:bg-accent "}>
                        Go Home
                    </Link>
                </div>
            </Container>
        </div>
    );
}
