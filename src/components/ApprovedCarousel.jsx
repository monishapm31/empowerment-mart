// src/components/ApprovedCarousel.jsx
import React from "react";
import Slider from "react-slick";

const ApprovedCarousel = ({ products }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Number of products visible
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768, // Mobile responsiveness
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const approved = products.filter((product) => product.approved);

  return (
    <div className="my-10 px-4">
      <h2 className="text-2xl font-bold mb-4 text-center">✔ Approved Crafts</h2>
      <Slider {...settings}>
        {approved.map((product) => (
          <div key={product.id} className="p-2">
            <div className="bg-white rounded-lg shadow-md p-4 text-center">
              <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded" />
              <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
              <p className="text-sm text-gray-600">{product.category}</p>
              <p className="text-blue-600 font-bold mt-1">₹{product.price}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ApprovedCarousel;
