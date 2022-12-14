import { Link, animateScroll as scroll } from "react-scroll";

import './footer.scss';

import logo from '../../resources/img/logo.png';
import tgicon from '../../resources/img/tg-icon.png';
import insticon from '../../resources/img/inst-icon.png';
import whatsappicon from '../../resources/img/whatsapp-icon.png';
import vkicon from '../../resources/img/vk-icon.png';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__main">
                <div className="footer__main-part">
                    <img className="footer__main-part-logo" src={logo} alt="logo" />
                    <div className="footer__main-part-socials">
                        <a href="https://telegram.com">
                            <img src={tgicon} alt="tgicon" />
                        </a>
                        <a href="https://instagram.com">
                            <img src={insticon} alt="insticon" />
                        </a>
                        <a href="https://whatsapp.com">
                            <img src={whatsappicon} alt="whatsappicon" />
                        </a>
                        <a href="https://vk.com">
                            <img src={vkicon} alt="vkicon" />
                        </a>
                    </div>
                    <p className="footer__main-part-copyright">(с) 2022 manicute</p>
                </div>
                <div className="footer__main-part">
                    <h3>Главная</h3>
                    <p>
                        <Link 
                            to="services"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={700}>
                                Прайс
                        </Link>
                    </p>
                    <p>
                        <Link 
                            to="gallery"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={700}>
                                Услуги
                        </Link>
                    </p>
                    <p>
                        <Link 
                            to="contacts"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={700}>
                                Контакты
                        </Link>
                    </p>
                </div>
                <div className="footer__main-part">
                    <h3>Помощь</h3>
                    <p>Карта</p>
                    <p>Пользовательское соглашение</p>
                    <p>Политика конфиденциальности</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;