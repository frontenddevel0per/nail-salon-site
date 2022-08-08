import { Link, animateScroll as scroll } from "react-scroll";

import './header.scss';

import logo from '../../resources/img/logo.png';
import art from '../../resources/img/art.png';

const Header = () => {
    return (
        <div className="header">
            <div className="header__main">
                <ul className="header__main-nav">
                    <li>
                        <Link 
                            to="services"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={700}>
                                Услуги
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="gallery"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={700}>
                                Галерея
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="contacts"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={700}>
                                Контакты
                        </Link>
                    </li>
                </ul>
                <h1>_MANICUTE_</h1>
                <h3>Студия неординарных ногтей,<br/>услуги бровиста в Москве и<br/>Санкт-Петербурге</h3>
                <div className="header__main-buttons">
                    <a href="#">
                        <button>Написать в WhatsApp</button>
                    </a>
                    <a href="#">
                        <button>Подписаться на Telegram</button>
                    </a>
                    <a href="#">
                        <button>Подписаться на VK</button>
                    </a>
                    <a href="#">
                        <button>Услуги</button>
                    </a>
                    <a href="#">
                        <button>Акции</button>
                    </a>
                    <a href="#">
                        <button>Как добраться</button>
                    </a>
                </div>
            </div>
            <div className="header__images">
                <img className="header__images-logo" src={logo} alt="logo" />
                <img className="header__images-art" src={art} alt="art" />
            </div>
        </div>
    )
}

export default Header;