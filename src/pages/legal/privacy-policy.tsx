import Container from "@/components/Layout/Container";
import Layout from "@/components/Layout/MasterLayout";
import Markdown from "react-markdown";
import PrivacyPolicyData from "@/data/docs/PrivacyPolicy.mdx";

export default function PrivacyPolicy() {
    return (
        <Layout pageTitle="Privacy Policy" pageDescription="Privacy Policy for apps and services provided by BeanTech">
            <Container>
                <div className="my-10 prose text-white prose-headings:text-white prose-a:text-white w-full max-w-[1000px] prose-strong:font-bold prose-strong:text-white">
                    <PrivacyPolicyData />
                </div>
            </Container>
        </Layout>
    );
}
