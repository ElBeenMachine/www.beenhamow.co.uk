import "@/styles/globals.css";
import type { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";
import { ToastContainer } from "react-toastify";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <ToastContainer stacked />
            <NextNProgress color="#00FFFF" options={{ showSpinner: false }} />
            <Component {...pageProps} />
        </>
    );
}
