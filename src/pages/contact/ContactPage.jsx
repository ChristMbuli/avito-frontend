import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

const ContactPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);

  useEffect(() => {
    // Définir l'animation de l'apparition du formulaire
    setIsVisible(true);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/messages", {
        fullname,
        email,
        message,
      });

      if (response.status === 200) {
        setShowSuccessModal(true);
        // Réinitialiser le formulaire après succès
        setFullname("");
        setEmail("");
        setMessage("");
      } else {
        setShowErrorModal(true);
      }
    } catch (error) {
      setShowErrorModal(true);
      console.error("Error submitting the form:", error);
    }
  };

  return (
    <>
      <NavBar />
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        {/* Card du formulaire */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white shadow-lg rounded-lg overflow-hidden w-96"
        >
          <div className="px-6 py-4">
            <h2 className="text-2xl font-bold mb-2 text-center">
              Contactez-nous
            </h2>
            {/* Formulaire */}
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="fullname"
                >
                  Nom complet
                </label>
                <input
                  className="border-gray-300 focus:border-blue-500 rounded-md shadow-sm focus:shadow-outline px-3 py-2 w-full"
                  type="text"
                  id="fullname"
                  name="fullname"
                  value={fullname}
                  onChange={(e) => setFullname(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="border-gray-300 focus:border-blue-500 rounded-md shadow-sm focus:shadow-outline px-3 py-2 w-full"
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  className="border-gray-300 focus:border-blue-500 rounded-md shadow-sm focus:shadow-outline px-3 py-2 w-full h-32 resize-none"
                  id="message"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="px-3 py-2 shadow font-semibold text-center text-white transition-colors duration-200 transform bg-[#e9d075] rounded-md md:inline hover:bg-[#DDB93B]"
              >
                Envoyer
              </button>
            </form>
          </div>
        </motion.div>
      </div>
      <Footer />

      {/* Modal de succès */}
      {showSuccessModal && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded-md">
            <p className="text-green-500 text-lg font-bold">
              Message envoyé avec succès!
            </p>
            <button
              className="mt-4 px-4 py-2 bg-[#e9d075] text-white rounded-md hover:bg-[#DDB93B]"
              onClick={() => setShowSuccessModal(false)}
            >
              Fermer
            </button>
          </div>
        </div>
      )}

      {/* Modal d'erreur */}
      {showErrorModal && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded-md">
            <p className="text-red-500 text-lg font-bold">
              Une erreur est survenue. Veuillez réessayer plus tard.
            </p>
            <button
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
              onClick={() => setShowErrorModal(false)}
            >
              Fermer
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactPage;
