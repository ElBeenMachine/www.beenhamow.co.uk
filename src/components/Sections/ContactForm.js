/**
 * @author @ElBeenMachine
 */
import PageSection from "./Parts/Section";

function ContactForm() {
    function submitForm(event) {
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
                console.log(data);
                form.reset();
            })
            .catch((error) => console.error(error));
    }

    return (
        <PageSection id={"contact"} index={"03"} title={"Contact Me"}>
            <form onSubmit={submitForm} className={"flex flex-col gap-4 justify-center items-start w-full"}>
                <div className={"w-full"}>
                    <label htmlFor={"name"}>Name</label>
                    <input
                        autoComplete="off"
                        className={"w-full px-3 py-2 mt-2 rounded-md outline-none bg-[#0e1624] border-2 border-solid border-[#00ffff] focus:border-[#00ffff]"}
                        type={"text"}
                        id={"name"}
                        name={"name"}
                        required={true}
                    />
                </div>
                <div className={"w-full"}>
                    <label htmlFor={"email"}>Email</label>
                    <input
                        autoComplete="off"
                        className={"w-full px-3 py-2 mt-2 rounded-md outline-none bg-[#0e1624] border-2 border-solid border-[#00ffff] focus:border-[#00ffff]"}
                        type={"email"}
                        id={"email"}
                        name={"email"}
                        required={true}
                    />
                </div>
                <div className={"w-full"}>
                    <label htmlFor={"message"}>Message</label>
                    <textarea
                        autoComplete="off"
                        className={"w-full px-3 py-2 mt-2 rounded-md outline-none bg-[#0e1624] border-2 border-solid border-[#00ffff] focus:border-[#00ffff]"}
                        id={"message"}
                        name={"message"}
                        required={true}
                    />
                </div>
                <button type={"submit"} className="w-full px-3 py-2 bg-[#00ffff] hover:bg-[#36a3a3] transition-all text-[#0e1624] md:w-40 rounded-md font-semibold">
                    Send
                </button>
            </form>
        </PageSection>
    );
}

export default ContactForm;
