function CenteredSectionTitle({ index, title }) {
    return (
        <h1
            className={
                "text-gray-200 w-full text-xl mb-5 centeredSectionHeader"
            }
        >
            <span className={"text-[#00ffff] mr-3"}>{index}.</span>
            {title}
        </h1>
    );
}

export default CenteredSectionTitle;
