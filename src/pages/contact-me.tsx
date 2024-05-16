import ContactForm from "@/components/Contact/ContactForm";
import Container from "@/components/Layout/Container";
import Layout from "@/components/Layout/MasterLayout";
import UnderConstructionCard from "@/components/UnderConstruction";

/**
 * The contact page
 *
 * @returns {JSX.Element} The contact page
 */
export default function ContactPage() {
    return (
        <Layout pageTitle="Contact Me">
            <Container>
                <ContactForm />
            </Container>
        </Layout>
    );
}
