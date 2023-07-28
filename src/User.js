export const User = ({ text, data }) => {
    return (
        <div>
            <h1>{text.name}</h1>
            <h3>{text.info}</h3>
            <h2>{data}</h2>
        </div>
    )
}