import React from "react"

const Button = ({btnClassName, btnText}) => {
    return (
    <button className={`button ${btnClassName}`}>{btnText}</button>
    )
}

export default Button