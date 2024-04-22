/**
 * @author @ElBeenMachine
 */

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
        <div className={"flex flex-col justify-center items-start h-[calc(100vh-80px)] w-full test-black"}>
            <form onSubmit={submitForm} className={"flex flex-col justify-center items-start h-[calc(100vh-80px)] w-full"}>
                <label htmlFor={"name"}>Name</label>
                <input type={"text"} id={"name"} name={"name"} required={true} />
                <label htmlFor={"email"}>Email</label>
                <input type={"email"} id={"email"} name={"email"} required={true} />
                <label htmlFor={"message"}>Message</label>
                <textarea id={"message"} name={"message"} required={true} />
                <button type={"submit"}>Send</button>
            </form>
        </div>
    );
}

export default ContactForm;
