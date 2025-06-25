import React from "react"
import Navigation from "../navigation/Navigation"
import Button from "../button/Button"

const Header = () => {
    const list = ['Подбор тура', 'Горящие туры', 'Страны', ' отели']
    return (
        <header className="header">
            <div className="container">
                <div className="header-content">
                    <a href="#" className="header-logo">
                        <img src={require('../../img/logo.png')} alt="anex" className="header-logo__img" />
                    </a>
                    <Navigation list={list} listClassName={'navigation-list--header'} linkClassName={'an-nav-link'} listItemClassName={'navigation-list__item--header'}/>
                    <div className="header-socials">
                       <Button btnClassName={'button--secondary button--lg'} btnText={'оставить заявку'} /> 
                       <div className="header-socials__list">
                        <a href="#" className="header__social-link">
                           <img className="header-socials__list-item" src={require('../../img/icons/call.svg')} alt="call" /> 
                        </a>
                        <a href="#" className="header__social-link">
                            <img className="header-socials__list-item" src={require('../../img/icons/location.svg')} alt="location" />
                        </a>
                       </div>
                       <Button btnClassName={'button--menu button--sm'} />
                    </div>
                    
                </div>
            </div>
        </header>
    )
}

export default Header