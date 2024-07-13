import React from "react";
import { Link } from "react-router-dom";
import VIDEO from "../images/video.webm";

const Hero = () => {
  return (
    <div className="p-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mt-8 md:mt-0 md:pl-8 mb-5">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Simplifiez Votre Réservation de Logement Étudiant !
          </h1>
          <p className="mt-4 mb-5 text-gray-600 text-lg">
            Découvrez nos services et profitez de nos offres exceptionnelles.
            Nous sommes là pour vous aider à chaque étape.
          </p>
          <Link
            to={"/contact-us"}
            className="mt-10 bg-[#e9d075] text-white shadow hover:bg-[#DDB93B] py-2 px-4 rounded"
          >
            Nous contacter
          </Link>
        </div>
        <div className="md:w-1/2">
          <video
            src={VIDEO}
            autoPlay
            loop
            muted
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
