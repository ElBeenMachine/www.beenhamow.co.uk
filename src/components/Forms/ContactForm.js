import { useState } from "react";

function FormGroup({ children }) {
    return <div className={"w-full flex flex-col my-7"}>{children}</div>;
}

function FormInput({ id, type, name, placeholder }) {
    return (
        <input
            id={id}
            className={
                "w-full px-3 py-2 rounded-md opacity-25 focus:opacity-100 transition-all text-black"
            }
            type={type}
            name={name}
            placeholder={placeholder}
            autoComplete={"off"}
            required
        />
    );
}

function ContactForm() {
    const [submitted, setSubmitted] = useState(false);

    function submitForm(e) {
        e.preventDefault();
        alert("This feature is still under construction");
        setSubmitted(true);
    }

    return (
        <div
            className={
                "w-full h-max flex flex-col justify-center items-center py-10"
            }
        >
            <h1 className={"py-5 text-4xl"}>Get In Touch</h1>
            <form className={"w-full max-w-3xl"} onSubmit={submitForm}>
                <FormGroup>
                    <label for="contact-email">Name</label>
                    <FormInput
                        id={"contact-name"}
                        type={"text"}
                        name={"name"}
                        placeholder={"Your Name"}
                    />
                </FormGroup>

                <FormGroup>
                    <label for="contact-email">Email Address</label>
                    <FormInput
                        id={"contact-email"}
                        type={"email"}
                        name={"email"}
                        placeholder={"Your Email Address"}
                    />
                </FormGroup>

                <FormGroup>
                    <label for="contact-message">Your Message</label>
                    <textarea
                        name="message"
                        id="contact-message"
                        placeholder="Your Message"
                        className={
                            "w-full px-3 py-2 rounded-md opacity-25 focus:opacity-100 min-h-[100px] h-auto transition-all text-black"
                        }
                        required
                    />
                </FormGroup>

                {submitted ? (
                    <button
                        type={"submit"}
                        className={
                            "w-full bg-my-cyan-400/50 transition-all md:w-max px-4 py-2 rounded-md"
                        }
                        disabled
                    >
                        Message Sent
                    </button>
                ) : (
                    <button
                        type={"submit"}
                        className={
                            "w-full bg-my-cyan-400 hover:bg-my-cyan-300 transition-all md:w-max px-4 py-2 rounded-md"
                        }
                    >
                        Send Message
                    </button>
                )}
            </form>
        </div>
    );
}

export default ContactForm;
