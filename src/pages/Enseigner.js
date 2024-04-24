import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/Navbar/NavBar';
import heroImg from '../images/web-dev.svg';
import heroLogo from '../images/logo.jpg';
//import './index.css'; // Assurez-vous d'avoir votre fichier CSS pour le style

function Enseigner() {
  return (
    <div className="App">
      <NavBar />
      <header className='py-16'>
        <h1>Enseigner l'italien</h1>
      </header>
      
    </div>
  );
}

export default Enseigner;