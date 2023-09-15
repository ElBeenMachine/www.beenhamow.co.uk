import Layout from "@/components/Layout/Layout";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import ContactForm from "@/components/Forms/ContactForm";

function Contact() {
    return (
        <Layout title={"Contact Me | Ollie B"}>
            <Navbar />
            <div className={"mx-10 md:px-6 mt-10"}>
                <ContactForm />
                <Footer />
            </div>
        </Layout>
    );
}

export default Contact;
