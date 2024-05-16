import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { toast, Bounce } from "react-toastify";

interface FormInputProps {
    label: string;
    id: string;
    name: string;
    type: "text" | "email" | "textarea";
    placeholder: string;
    required: boolean;
}

/**
 * Form input component
 *
 * @param {FormInputProps} props The properties of the form input
 * @returns {JSX.Element} The form input component
 */
function FormInput({ label, id, name, type, placeholder, required }: FormInputProps) {
    return (
        <div>
            <label htmlFor={id} className="block mb-2 text-sm font-medium text-gray-300">
                {label}
            </label>
            {type === "textarea" ? (
                <textarea
                    id={id}
                    rows={6}
                    name={name}
                    className="block p-3 w-full text-sm rounded-lg shadow-sm border bg-input border-gray-600 placeholder-gray-400 text-white focus:outline-none"
                    placeholder={placeholder}
                ></textarea>
            ) : (
                <input
                    type={type}
                    id={id}
                    name={name}
                    className="block p-3 w-full text-sm rounded-lg shadow-sm border bg-input border-gray-600 placeholder-gray-400 text-white focus:outline-none"
                    placeholder={placeholder}
                    required={required}
                />
            )}
        </div>
    );
}

/**
 * Contact form component
 *
 * @returns {JSX.Element} The contact form component
 */
export default function ContactForm() {
    const [sent, setSent] = useState(false);

    function submitForm(event: any) {
        event.preventDefault();

        const form = event.target;

        // Store the form data in a JSON array
        const formData = new FormData(form);
        const jsonData = Object.fromEntries(formData.entries());

        fetch("/api/sendMessage", {
            method: "POST",
            body: JSON.stringify(jsonData),
        })
            .then((response) => response.json())
            .then((data) => {
                setSent(true);
                form.reset();
            })
            .catch((error) => {
                console.error(error);
                toast.error(error.message, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: Bounce,
                });
            });

        // Scroll to the top of the page
        window.scrollTo(0, 0);
    }

    return (
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <h2 className="mb-4 text-4xl font-bold text-center">Contact Me</h2>
            <p className="mb-8 lg:mb-16 font-light text-center text-gray-400 sm:text-xl">Want to talk? Want to discuss a project? Let me know.</p>
            {sent ? (
                <div className="w-full flex flex-col gap-5 justify-center items-center h-60">
                    <FaCheckCircle className="text-6xl text-accent" />
                    <p className="text-2xl">Your message has been sent!</p>
                </div>
            ) : (
                <form onSubmit={submitForm} className="space-y-8">
                    <FormInput label="Your name" id="name" name="name" type="text" placeholder="John Doe" required />
                    <FormInput label="Your email" id="email" name="email" type="email" placeholder="name@example.com" required />
                    <FormInput label="Your Message" id="message" name="message" type="textarea" placeholder="Your message here..." required />

                    <button type="submit" className="block w-max transition-all text-accent font-semibold border rounded-md border-accent px-4 py-3 hover:text-[#303030] hover:bg-accent">
                        Send message
                    </button>
                </form>
            )}
        </div>
    );
}
