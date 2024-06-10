import Container from "@/components/Layout/Container";
import Layout from "@/components/Layout/MasterLayout";
import TermsAndConditionsData from "@/data/docs/TermsAndConditions.mdx";

export default function TermsAndConditions() {
    return (
        <Layout pageTitle="Terms and Conditions" pageDescription="Terms and Conditions for apps and services provided by BeanTech">
            <Container>
                <div className="my-10 prose text-white prose-headings:text-white prose-a:text-white w-full max-w-[1000px] prose-strong:font-bold prose-strong:text-white">
                    <TermsAndConditionsData />
                </div>
            </Container>
        </Layout>
    );
}
