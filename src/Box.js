import React from "react";

const Box = ({id, backgroundColor, height, width, handleDelete}) => {
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
        <button onSubmit={handleDelete(id)}
        style={{
            width: width
        }}>Delete</button>
        </>
    )
}

export default Box;