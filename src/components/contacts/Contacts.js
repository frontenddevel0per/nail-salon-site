import './contacts.scss';

import tgicon from '../../resources/img/tg-icon.png';
import insticon from '../../resources/img/inst-icon.png';
import whatsappicon from '../../resources/img/whatsapp-icon.png';
import vkicon from '../../resources/img/vk-icon.png';

const Contacts = () => {
    return (
        <div className="contacts">
            <div className="contacts__header">
                <button className="active">СПб</button>
                <button>Мск</button>
            </div>
            <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A7f14a301e121451c450945c4dc75847b6fcefedacdfdd4f59c4decd6308ce279&amp;source=constructor" width="100%" height="600" frameborder="0"></iframe>
            <div className="contacts__mapinfo">
                <h1>_ManiCute_</h1>
                <p>Санкт-Петербург, Невский проспект, 108В<br/>Пн-Вс, с 9:00 до 21:00</p>
                <div className="contacts__mapinfo-icons">
                    <a href="https://telegram.com">
                        <img src={tgicon} alt="tg-icon"/>
                    </a>
                    <a href="https://instagram.com">
                        <img src={insticon} alt="inst-icon"/>
                    </a>
                    <a href="https://whatsapp.com">
                        <img src={whatsappicon} alt="whatsapp-icon"/>
                    </a>
                    <a href="https://vk.com">
                        <img src={vkicon} alt="vk-icon"/>
                    </a>
                </div>
                <button>Записаться</button>
            </div>
        </div>
    )
}

export default Contacts;