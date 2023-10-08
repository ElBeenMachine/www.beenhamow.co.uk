function SectionTitle({ index, title }) {
    return (
        <h1 className={"sectionHeader text-gray-200"}>
            <span className={"text-[#00ffff] mr-3"}>{index}.</span>
            {title}
        </h1>
    );
}

export default SectionTitle;
