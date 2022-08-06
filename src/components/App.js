import Header from './header/Header';
import Services from './services/Services';
import Gallery from './gallery/Gallery';
import Contacts from './contacts/Contacts';
import Footer from './footer/Footer';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Header/>
      <Services/>
      <Gallery/>
      <Contacts/>
      <Footer/>
    </div>
  );
}

export default App;
