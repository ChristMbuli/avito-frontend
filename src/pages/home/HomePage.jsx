import React, { useState, useEffect } from "react";
import NavBar from "../../components/NavBar";
import Hero from "../../components/Hero";
import Sponsor from "../../components/Sponsor";
import FINANCE from "../../images/finance.jpeg";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Teams from "../../components/Teams";

const ElevatorPitchModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 p-3 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white rounded-lg p-8 shadow-lg max-w-lg mx-auto max-h-96 overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4">Elevator Pitch</h2>
        <p>
          Bonjour, Imaginez un étudiant international arrivant au Maroc,
          confronté à la recherche de logement et aux démarches administratives
          complexes. C’est là qu’Etando entre en jeu. Etando est une plateforme
          innovante, semblable à Airbnb, spécialement conçue pour les étudiants
          étrangers. Elle facilite non seulement la réservation de logements
          adaptés à leurs besoins mais offre également une assistance précieuse
          pour les procédures administratives liées à l’obtention du permis de
          séjour. Grâce à notre application intuitive, développée avec les
          dernières technologies comme le MERN stack, Cloudinary et Tailwind
          CSS, nous garantissons une expérience utilisateur fluide et agréable.
          En quelques clics, les étudiants peuvent réserver leur logement et
          accéder à des ressources et services pour simplifier leur installation
          au Maroc. Notre projet a déjà reçu une reconnaissance significative,
          remportant le premier prix au concours de codage de SUPEMIR et un
          financement de 15000 MAD. Nous croyons fermement que Etando
          révolutionnera l’accueil des étudiants internationaux au Maroc, en
          rendant leur transition plus douce et plus sereine. Merci pour votre
          attention, et j’espère que vous serez aussi enthousiasmés par Etando
          que nous le sommes.
        </p>
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-[#e9d075] text-white rounded-lg shadow hover:bg-[#DDB93B]"
        >
          Fermer
        </button>
      </div>
    </div>
  );
};

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setIsModalOpen(true);
  }, []);

  return (
    <div>
      <NavBar />
      <Hero />
      <hr />
      <Sponsor />
      <ElevatorPitchModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      {/* Financement */}
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-10">
        <h1 className="text-4xl mt-5 text-center font-bold text-gray-800 mb-8">
          Obtention d’un financement !
        </h1>
        <div className="w-full flex justify-center">
          <img
            src={FINANCE}
            alt="Success Image"
            className="w-1/2 h-auto rounded-md shadow-lg"
          />
        </div>
      </div>

      {/* PRobleme */}
      <header className="bg-white dark:bg-white-800">
        <div className="container flex flex-col px-6 py-4 mx-auto space-y-6 md:h-128 md:py-16 md:flex-row md:items-center md:space-x-6">
          <div className="flex flex-col items-center w-full md:flex-row md:w-1/2">
            <div className="max-w-lg md:mx-12 md:order-2">
              <h1 className="text-3xl font-medium tracking-wide text-gray-800 dark:text-dark md:text-4xl">
                Notre Solution
              </h1>
              <p className="mt-4 text-gray-600 dark:text-dark-300">
                Etando est une application innovante simplifiant l'expérience
                des étudiants étrangers au Maroc en proposant des solutions
                intégrées pour la recherche de logement et les démarches
                administratives. Notre objectif : rendre leur séjour plus
                agréable et leur permettre de se concentrer pleinement sur leurs
                études et leur intégration dans la vie marocaine.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center w-full h-96 md:w-1/2">
            <img
              className="object-contain w-full h-full max-w-1xl rounded-md"
              src="https://res.cloudinary.com/do2qwucmp/image/upload/v1720854233/js2uiuqctbdrazqmjnc9.png"
              alt="apple watch photo"
            />
          </div>
        </div>
      </header>

      {/* Canva */}
      <header className="bg-white dark:bg-gray-800">
        <div className="container flex flex-col px-6 py-4 mx-auto space-y-6 md:h-128 md:py-16 md:flex-row md:items-center md:space-x-6">
          <div className="flex flex-col items-center w-full md:flex-row md:w-1/2">
            <div className="max-w-lg md:mx-12 md:order-2">
              <h1 className="text-3xl font-medium tracking-wide text-gray-800 dark:text-white md:text-4xl">
                Business Model Canva
              </h1>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                Etando facilite la réservation de logements pour les étudiants étrangers au Maroc et les aide avec les démarches administratives. Nous utilisons un site web, une application mobile et des partenariats universitaires. Nos revenus proviennent des frais de service, des abonnements premium et des partenariats
              </p>
              <div className="mt-6">
                <Link
                  to={"contact-us"}
                  className="block px-3 py-2 shadow font-semibold text-center text-white transition-colors duration-200 transform bg-[#e9d075] rounded-md md:inline hover:bg-[#DDB93B]"
                >
                  Nous contacter
                </Link>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center w-full h-96 md:w-1/2">
            <img
              className="object-contain w-full h-full max-w-1xl rounded-md"
              src="https://res.cloudinary.com/do2qwucmp/image/upload/v1720826707/phxfqfa57cfppcwlhvdr.png"
              alt="apple watch photo"
            />
          </div>
        </div>
      </header>
      {/* Swot */}
      <header className="bg-white dark:bg-white-800">
        <div className="container flex flex-col px-6 py-4 mx-auto space-y-6 md:h-128 md:py-16 md:flex-row md:items-center md:space-x-6">
          <div className="flex flex-col items-center w-full md:flex-row md:w-1/2">
            <div className="max-w-lg md:mx-12 md:order-2">
              <h1 className="text-3xl font-medium tracking-wide text-gray-800 dark:text-dark md:text-4xl">
                Analyse Swot
              </h1>
              <p className="mt-4 text-gray-600 dark:text-dark-300">
                L'analyse SWOT (Strengths, Weaknesses, Opportunities, Threats)
                est un outil stratégique essentiel pour évaluer les différents
                aspects de notre projet Etando. Cette analyse nous permet
                d'identifier nos forces et nos faiblesses internes ainsi que les
                opportunités et les menaces externes auxquelles nous sommes
                confrontés. Voici une vue d'ensemble de notre analyse SWOT
              </p>
              <div className="mt-6">
                <Link
                  to={"/contact-us"}
                  className="block px-3 py-2 shadow font-semibold text-center text-white transition-colors duration-200 transform bg-[#e9d075] rounded-md md:inline hover:bg-[#DDB93B]"
                >
                  Nous contacter
                </Link>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center w-full h-96 md:w-1/2">
            <img
              className="object-contain w-full h-full max-w-1xl rounded-md"
              src="https://res.cloudinary.com/do2qwucmp/image/upload/v1720826677/he3shopdcxlncnb7a2bv.png"
              alt="apple watch photo"
            />
          </div>
        </div>
      </header>
      {/* Tableau */}
      <div className="bg-white dark:bg-gray-800 mx-auto px-4 py-8 rounded-lg shadow-lg">
        <h2 className="text-3xl text-white font-bold mb-4 text-center">
          Besoin de Financement
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg">
            <thead>
              <tr>
                <th className="py-3 px-6 border-b-2 border-gray-200 bg-gray-100 text-left text-sm leading-4 text-gray-700 tracking-wider">
                  Investissements
                </th>
                <th className="py-3 px-6 border-b-2 border-gray-200 bg-gray-100 text-left text-sm leading-4 text-gray-700 tracking-wider">
                  Montants (Dhs)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-100">
                <td className="py-3 px-6 border-b border-gray-200">
                  <Link
                    to={"https://amde.ma/tarifs/#faq%C2%A0)"}
                    target="_blank"
                    className="hover:underline"
                  >
                    {" "}
                    Création d'entreprise
                  </Link>
                </td>
                <td className="py-3 px-6 border-b border-gray-200">5 000</td>
              </tr>
              <tr className="hover:bg-gray-100">
                <td className="py-3 px-6 border-b border-gray-200">
                  <Link
                    to={
                      "http://www.ompic.ma/sites/default/files/visuel%20tarif%202019%20VF%20liste1.pdf"
                    }
                    target="_blank"
                    className="hover:underline"
                  >
                    {" "}
                    Obtention brevet
                  </Link>
                </td>
                <td className="py-3 px-6 border-b border-gray-200">6 000</td>
              </tr>
              <tr className="hover:bg-gray-100">
                <td className="py-3 px-6 border-b border-gray-200">
                  Travaux et aménagement
                </td>
                <td className="py-3 px-6 border-b border-gray-200">50 000</td>
              </tr>
              <tr className="hover:bg-gray-100">
                <td className="py-3 px-6 border-b border-gray-200">
                  Matériel de bureau
                </td>
                <td className="py-3 px-6 border-b border-gray-200">30 000</td>
              </tr>
              <tr className="hover:bg-gray-100">
                <td className="py-3 px-6 border-b border-gray-200">
                  Développement apps web/mobile
                </td>
                <td className="py-3 px-6 border-b border-gray-200">100 000</td>
              </tr>
              <tr className="hover:bg-gray-100">
                <td className="py-3 px-6 border-b border-gray-200">
                  Trésorerie de départ
                </td>
                <td className="py-3 px-6 border-b border-gray-200">200 000</td>
              </tr>
            </tbody>
            <tfoot>
              <tr className="bg-gray-100">
                <td className="py-3 px-6 font-bold text-gray-700">Total</td>
                <td className="py-3 px-6 font-bold text-gray-700">391 000</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
      {/* Part du marché */}
      <header className="bg-white dark:bg-white-800">
        <div className="container flex flex-col px-6 py-4 mx-auto space-y-6 md:h-128 md:py-16 md:flex-row md:items-center md:space-x-6">
          <div className="flex flex-col items-center w-full md:flex-row md:w-1/2">
            <div className="max-w-lg md:mx-12 md:order-2">
              <p className="mt-4 text-gray-600 dark:text-dark-300">
                Le marché des étudiants étrangers au Maroc est prometteur pour
                Etando. En 2021, il y avait 23 411 étudiants étrangers au Maroc,
                principalement africains (19 256 selon{" "}
                <Link
                  className="underline"
                  to={
                    "https://medias24.com/2023/03/06/23-411-etudiants-etrangers-inscrits-au-maroc-en-2021-dont-83-africains/"
                  }
                  target="_blank"
                >
                  Media24.ma
                </Link>
                ). Nous visons à attirer 2 888 étudiants sur notre plateforme
                pour leurs réservations de logement et leurs démarches
                administratives.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center w-full h-96 md:w-1/2">
            <img
              className="object-contain w-full h-full max-w-1xl rounded-md"
              src="https://res.cloudinary.com/do2qwucmp/image/upload/v1720857205/qwm6hsll0kux16xx8uuu.png"
              alt="apple watch photo"
            />
          </div>
        </div>
      </header>
      <Teams />
      <Footer />
    </div>
  );
};

export default HomePage;
