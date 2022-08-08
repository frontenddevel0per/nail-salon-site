import Header from './header/Header';
import Services from './services/Services';
import Gallery from './gallery/Gallery';
import Contacts from './contacts/Contacts';
import Footer from './footer/Footer';
import ModalWindow from './modalWindow/ModalWindow';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Header/>
      <Services/>
      <Gallery/>
      <Contacts/>
      <Footer/>
      <ModalWindow/>
    </div>
  );
}

export default App;
