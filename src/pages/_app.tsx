import "@/styles/globals.css";
import type { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <NextNProgress color="#00FFFF" options={{ showSpinner: false }} />
            <Component {...pageProps} />;
        </>
    );
}
