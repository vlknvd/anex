import React from "react"

const NavMenu = ({list, listClassName, listItemClassName, linkClassName}) => {
    return (
        <nav className="nav-menu">
            <ul className={`nav-menu__list ${listClassName}`}>
                {list.map((el, i) => {
                    return (
                        <li className={`nav-menu__list-item ${listItemClassName}`}>
                            <a href="#" className={`nav-menu__item-link ${linkClassName} ${i === 1 ? 'an-text-red': 'an-text-black'}`}>{el}</a>
                        </li>)
                })}
            </ul>
        </nav>
    )
}

export default NavMenu