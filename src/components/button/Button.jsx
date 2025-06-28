import React from "react"

const Button = ({btnClassName, btnTextClassName, btnText}) => {
    return (
    <button className={`button ${btnClassName}`}>
        <p className={`${btnTextClassName}`}>{btnText}</p>
    </button>
    )
}

export default Button