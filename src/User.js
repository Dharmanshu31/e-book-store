import React from "react"
export const User = ({ text, data }) => {
    return (
        <React.Fragment>
            <h1>{text.name}</h1>
            <h3>{text.info}</h3>
            <h2>{data}</h2>
        </React.Fragment>
    )
}