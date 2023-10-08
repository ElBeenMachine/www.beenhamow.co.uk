function PageLoader() {
    return (
        <div
            id={"page-loader"}
            className={
                "w-full h-full flex justify-center items-center bg-[#0e1624] fixed top-0 left-0 z-50"
            }
        >
            <svg
                id="Layer_2"
                data-name="Layer 2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1024 1048.57"
            >
                <g id="Layer_1-2" data-name="Layer 1">
                    <text
                        className="cls-1"
                        transform="translate(328.58 711.23)"
                    >
                        <tspan x="0" y="0">
                            B
                        </tspan>
                    </text>
                    <path
                        className="cls-2"
                        d="m90.77,295.85v432.3c0,16.74,8.93,32.21,23.43,40.58l374.38,216.15c14.5,8.37,32.36,8.37,46.85,0l374.38-216.15c14.5-8.37,23.43-23.84,23.43-40.58v-432.3c0-16.74-8.93-32.21-23.43-40.58L535.43,39.13c-14.5-8.37-32.36-8.37-46.85,0L114.19,255.27c-14.5,8.37-23.43,23.84-23.43,40.58Z"
                    />
                </g>
            </svg>
        </div>
    );
}

export default PageLoader;
