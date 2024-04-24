import React from 'react';
import { HashLink } from 'react-router-hash-link';

const NavLinks = () => {
    return (
        <>
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-green-700" smooth to="/#hero">
                Accueil
            </HashLink>
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-green-700" smooth to="/forum">
                Forum
            </HashLink>
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-green-700" smooth to="/activites">
                Activités culturelles
            </HashLink>
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-green-700" to="/Nousconnaitre">
                Nous connaître
            </HashLink>
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-green-700" to="/Adherer">
                Adhérer
            </HashLink>
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-green-700" smooth to="/Promouvoir">
                Promouvoir l'italien
            </HashLink>
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-green-700" smooth to="/Apprendre">
                Appprendre
            </HashLink>
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-green-700" smooth to="/Enseigner">
                Enseigner
            </HashLink>
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-green-700" smooth to="/divers">
                Divers
            </HashLink>
        </>
    )
}

export default NavLinks;
