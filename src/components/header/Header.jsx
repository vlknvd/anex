import React, { useEffect } from "react"
import Button from "../button/Button"
import NavMenu from "../navMenu/NavMenu"
import BurgerMenu from "../burgerMenu/BurgerMenu"

const Header = () => {
    let list = ['Подбор тура', 'Горящие туры', 'Страны', ' отели']
    if(window.innerWidth < 1920) {
        list = list.slice(0, 2)
    }
    return (
        <header className="header">
            <div className="container">
                <div className="header__content">
                    <a href="#">
                        <img src={require('../../img/logo.png')} alt="anex" className="header__logo" />
                    </a>
                    <NavMenu list={list} listClassName={'nav-menu__list--header'} linkClassName={'an-text-sm an-text-upper'} listItemClassName={'nav-menu__list-item--header'}/>
                    <div className="header__content-right">
                    <div className="header__socials">
                       <Button btnClassName={'button--secondary button--lg'} btnText={'оставить заявку'} btnTextClassName={'an-text-sm an-text-black an-text-upper'}/> 
                       <div className="header__links">
                        <a href="#">
                           <img className="header__links-img" src={require('../../img/icons/call.svg')} alt="call" /> 
                        </a>
                        <a href="#" >
                            <img className="header__links-img" src={require('../../img/icons/location.svg')} alt="location" />
                        </a>
                       </div>
                    </div>
                    <BurgerMenu />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header