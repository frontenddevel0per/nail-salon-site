import { useSelector } from 'react-redux';

import './modalWindow.scss';

const ModalWindow = () => {
    const {modalIsActive} = useSelector(state => state);
    const classes = modalIsActive ? "modalWindow active" : "modalWindow";
    if (modalIsActive) {
        document.querySelector('body').style.overflow = "hidden";
    } else {
        document.querySelector('body').style.overflow = "visible";
    }

    return (
        <div className={classes} id="modalWindow">

        </div>
    )
}

export default ModalWindow;