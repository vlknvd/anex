import React from "react"

const Navigation = ({list, listClassName, listItemClassName, linkClassName}) => {
    return (
        <nav className="navigation">
            <ul className={`navigation-list ${listClassName}`}>
                {list.map((el, i) => {
                    return (
                        <li className={`navigation-list__item ${listItemClassName}`}>
                            <a href="#" className={`navigation-link ${linkClassName}`}>{el}</a>
                        </li>)
                })}
            </ul>
        </nav>
    )
}

export default Navigation