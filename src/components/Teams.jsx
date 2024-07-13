import React from "react";
import MICHEL from "../images/zeze.jpeg";
import ARIEL from "../images/ariel.jpeg";
import DAPH from "../images/daph.jpeg";
import CHRIST from "../images/christ.jpeg";

const teamMembers = [
  {
    name: "Daphnée Bouyedi",
    role: "Chef de projet",
    image: DAPH,
  },
  {
    name: "Ariel Aboli",
    role: "Marketing",
    image: ARIEL,
  },
  {
    name: "Michel Inapogui",
    role: "Dev frontend",
    image: MICHEL,
  },
  {
    name: "Christ Mbuli",
    role: "CEO (dev fullstack)",
    image: CHRIST,
  },
];

const Teams = () => {
  return (
    <div className="bg-gray-800 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white">Notre équipe</h1>
          <p className="text-lg text-gray-300 mt-4">
            Rencontrez l'équipe passionnée qui fait avancer notre mission chaque
            jour. Nous croyons que la diversité des compétences et des
            perspectives est la clé de notre succès.
          </p>
        </div>

        <div className="flex flex-wrap justify-center">
          {teamMembers.map((member, index) => (
            <div key={index} className="w-full md:w-6/12 lg:w-3/12 mb-8 px-4">
              <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                <img
                  className="w-full h-64 object-cover"
                  src={member.image}
                  alt={member.name}
                />
                <div className="p-4">
                  <h2 className="text-xl font-bold text-gray-900 mb-2">
                    {member.name}
                  </h2>
                  <p className="text-gray-700">{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Teams;
