import Head from "next/head";
import Navigation from "./NavBar";
import { useRouter } from "next/router";

function ErrorPage({ code, message }) {
    const router = useRouter();
    return (
        <>
            <Head>
                <link rel="icon" href="/img/logo.svg" />
                <title>{`Error ${code}`}</title>
            </Head>
            <main>
                <div
                    id={"page-content"}
                    className={
                        "text-center w-full h-screen px-5 md:px-40 2xl:px-80 flex flex-col items-center justify-center"
                    }
                >
                    <img
                        src="/img/logo.svg"
                        alt="logo"
                        className={"max-w-[75px] w-full my-10"}
                    />
                    <h1 className="text-3xl font-bold mb-5">Error {code}</h1>
                    <p>{message}</p>
                    <button
                        onClick={() => router.push("/")}
                        className={
                            "transition-all text-[#00ffff] font-semibold border rounded-md border-[#00ffff] px-5 py-3 mt-5 hover:text-[#303030] hover:bg-[#00ffff]"
                        }
                    >
                        Go Home
                    </button>
                </div>
            </main>
        </>
    );
}

export default ErrorPage;
