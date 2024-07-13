import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white text-dark py-4 px-2">
      <div className="container mx-auto flex justify-between items-center">
        {/* Informations de contact */}
        <div className="text-sm">
          <p>+212-708554131</p>
          <p>+212-777928144</p>
          {/* Utilisation de 'href' avec 'mailto:' pour ouvrir l'email */}
          <a
            href="mailto:etandogroup@outlook.com"
            className="text-dark underline"
          >
            Email : etandogroup@outlook.com
          </a>
        </div>

        {/* Réseaux sociaux */}
        <div className="flex space-x-4">
          <a
            href="https://web.facebook.com/profile.php?id=61561604244226"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500"
          >
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a
            href="https://www.instagram.com/etandogroup/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500"
          >
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a
            href="https://www.tiktok.com/@etando.group"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500"
          >
            <FontAwesomeIcon icon={faTiktok} size="2x" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
