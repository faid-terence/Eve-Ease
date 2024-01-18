import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../../assets/images/dance3.jpg";
import image2 from "../../assets/images/dance5.jpg";
import image3 from "../../assets/images/dance6.jpg";

export const HeroSLider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  return (
    <div className="relative">
      <Slider {...settings}>
        <div className="h-screen flex items-center justify-center">
          <div
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${image1})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "100%",
              height: "100%",
            }}
          >
            <h1 className="text-white text-4xl font-bold">Slide 1</h1>
          </div>
        </div>
        <div className="h-screen flex items-center justify-center">
          <div
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${image2})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "100%",
              height: "100%",
            }}
          >
            <h1 className="text-white text-4xl font-bold">Slide 2</h1>
          </div>
        </div>
        <div className="h-screen flex items-center justify-center">
          <div
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${image3})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "100%",
              height: "100%",
            }}
          >
            <h1 className="text-white text-4xl font-bold">Slide 3</h1>
          </div>
        </div>
        {/* Add more slides as needed */}
      </Slider>
    </div>
  );
};
