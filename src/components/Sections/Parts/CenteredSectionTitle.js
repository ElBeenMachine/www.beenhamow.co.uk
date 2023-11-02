function CenteredSectionTitle({ index, title }) {
    return (
        <h1
            className={
                "text-gray-200 w-full text-2xl my-5 centeredSectionHeader text-center"
            }
        >
            <span className={"text-[#00ffff] mr-3"}>{index}.</span>
            {title}
        </h1>
    );
}

export default CenteredSectionTitle;
