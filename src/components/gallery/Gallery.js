import { useState, useEffect } from 'react';

import './gallery.scss';
import DB from '../../resources/DB/photos.json';

import gallery1 from '../../resources/img/gallery1.png';
import gallery2 from '../../resources/img/gallery2.png';
import gallery3 from '../../resources/img/gallery3.png';
import gallery4 from '../../resources/img/gallery4.png';
import gallery5 from '../../resources/img/gallery5.png';
import gallery6 from '../../resources/img/gallery6.png';
import gallery7 from '../../resources/img/gallery7.png';
import gallery8 from '../../resources/img/gallery8.png';

const Gallery = () => {
    // const [images, setImages] = useState(0);
    // let imagesArr = [];

    // imagesArr = DB.map(item => <img src={item.src} alt={item.alt} />)

    return (
        <div className="gallery" id="gallery">
            <div className="gallery__collage">
                {/* {imagesArr} */}
                <img src={gallery1} alt="gallery1" />
                <img src={gallery2} alt="gallery2" />
                <img src={gallery3} alt="gallery3" />
                <img src={gallery4} alt="gallery4" />
                <img src={gallery5} alt="gallery5" />
                <img src={gallery6} alt="gallery6" />
                <img src={gallery7} alt="gallery7" />
                <img src={gallery8} alt="gallery8" />
            </div>
            <button>Показать ещё</button>
        </div>
    )
}

export default Gallery;