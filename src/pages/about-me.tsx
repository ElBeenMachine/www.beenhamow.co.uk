import Layout from "@/components/Layout/MasterLayout";
import UnderConstructionCard from "@/components/UnderConstruction";

/**
 * The about me page
 *
 * @returns {JSX.Element} The about me page
 */
export default function AboutPage() {
    return (
        <Layout pageTitle="About Me">
            <UnderConstructionCard />
        </Layout>
    );
}
