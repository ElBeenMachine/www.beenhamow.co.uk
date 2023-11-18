import ErrorPage from "@/components/ErrorPage";

function Error({ statusCode }) {
    const statusMessages = {
        404: "The requested page or resource could not be found on our servers.",
        500: "A unexpected error has occurred on our end. Please again later.",
    };

    const message = statusCode
        ? statusMessages[statusCode]
            ? statusMessages[statusCode]
            : statusMessages[500]
        : "An unexpected error has occurred in your browser. Please try again.";

    return <ErrorPage code={statusCode || 500} message={message} />;
}

Error.getInitialProps = async ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
    return { statusCode };
};

export default Error;
