function TechCard({ name = "Untitled Technlogy", image }) {
    return (
        <div
            className={
                "w-full md:w-[150px] max-w-[calc(50%-20px)] sm:max-w-[calc(33%-20px)] md:max-w-[calc(20%-80px)] xl:max-w-[calc(20%-80px)] flex flex-col pb-5 mr-5 md:mr-20 select-none"
            }
        >
            <div
                className={
                    "w-full flex flex-wrap justify-center items-center mt-5"
                }
            >
                <img
                    alt={name}
                    src={image}
                    className={
                        "w-full rounded-md h-auto object-contain object-center aspect-square transition-all"
                    }
                />
                <h2 className={"text-2xl pb-3 mt-5"}>{name}</h2>
            </div>
        </div>
    );
}

export default TechCard;
