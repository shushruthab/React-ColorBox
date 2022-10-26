import React from "react";

const Box = ({id, backgroundColor, height, width, handleDelete}) => {
    const remove = () => handleDelete(id);
    return (
        <>
        <div
        className="Box"
        style={{
            backgroundColor: backgroundColor,
            width: `${width}em`,
            height: `${height}em`
        }}>
        </div>
        <button onClick={remove}
        style={{
            width: `${width}em`
        }}>Delete</button>
        </>
    )
}

export default Box;