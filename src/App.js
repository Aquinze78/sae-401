import React, { useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import './index.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
// All pages
import Home from './pages/Home';
import Contact from './pages/Contact';
import DemoProduct from './pages/DemoProduct';
import Forum from './pages/Forum';
import Divers from './pages/Divers';
import Activites from './pages/Activites';
import Nousconnaitre from './pages/Nousconnaitre';
import Adherer from './pages/Adherer';
import Promouvoir from './pages/Promouvoir';
import Apprendre from './pages/Apprendre';
import Enseigner from './pages/Enseigner';


import {useDocTitle} from './components/CustomHook';
import ScrollToTop from './components/ScrollToTop';

function App() {
  useEffect(() => {
    const aos_init = () => {
      AOS.init({
        once: true,
        duration: 1000,
        easing: 'ease-out-cubic',
      });
    }

    window.addEventListener('load', () => {
      aos_init();
    });
  }, []);

  useDocTitle("APIRP - Association des Professeurs d'Italien de la Région Parisienne");

  return (
    <>
      <Router>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/forum" element={<Forum />} />
            <Route path="/divers" element={<Divers />} />
            <Route path="/activites" element={<Activites />} />
            <Route path="/Nousconnaitre" element={<Nousconnaitre />} />
            <Route path="/Adherer" element={<Adherer />} />
            <Route path="/Promouvoir" element={<Promouvoir />} />
            <Route path="/Apprendre" element={<Apprendre />} />
            <Route path="/Enseigner" element={<Enseigner />} />
          </Routes>
        </ScrollToTop>
      </Router>
    </>
  );
}


export default App;
