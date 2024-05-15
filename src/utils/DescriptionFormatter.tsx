import { Fragment } from "react";

/**
 * A function to format a description with line breaks
 *
 * @param description The description to format
 * @returns {JSX.Element} The formatted description
 */
export function formatDescription(description: string) {
    return description.split("\n").map((text, index) => (
        <Fragment key={index}>
            {text}
            <br />
        </Fragment>
    ));
}
