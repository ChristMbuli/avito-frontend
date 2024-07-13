import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ACCELAB from "../images/acce.png";
import SUP from "../images/sup.png";
import AEBM from "../images/aebm.png";
import SUPF from "../images/supf.png";

const Sponsor = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const imgStyle = {
    width: "150px",
    height: "150px",
    objectFit: "cover",
  };

  return (
    <div className=" py-8">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">
          Nos Partenaires
        </h2>
        <Slider {...settings}>
          <div className="p-4 flex justify-center">
            <img src={ACCELAB} alt="Partenaire 1" style={imgStyle} />
          </div>
          <div className="p-4 flex justify-center">
            <img src={SUP} alt="Partenaire 2" style={imgStyle} />
          </div>
          <div className="p-4 flex justify-center">
            <img src={AEBM} alt="Partenaire 3" style={imgStyle} />
          </div>
          <div className="p-4 flex justify-center">
            <img src={SUPF} alt="Partenaire 4" style={imgStyle} />
          </div>
          <div className="p-4 flex justify-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Orange_logo.svg/284px-Orange_logo.svg.png"
              alt="Partenaire 4"
              style={imgStyle}
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Sponsor;
