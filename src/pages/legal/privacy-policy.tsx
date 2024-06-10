import Container from "@/components/Layout/Container";
import Layout from "@/components/Layout/MasterLayout";
import Markdown from "react-markdown";
import { readFileSync } from "fs";

export default async function PrivacyPolicy({ privacyPolicy }: { privacyPolicy: string }) {
    console.log(privacyPolicy);

    return (
        <Layout pageTitle="Privacy Policy" pageDescription="Privacy Policy for apps and services provided by BeanTech">
            <Container>
                <Markdown>{privacyPolicy}</Markdown>
            </Container>
        </Layout>
    );
}

export async function getServerSideProps() {
    // Load the privacy policy markdown file
    const privacyPolicy = await readFileSync("./src/data/docs/PrivacyPolicy.md", "utf-8");

    return {
        props: {
            privacyPolicy,
        },
    };
}
