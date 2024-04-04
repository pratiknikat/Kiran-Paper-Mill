import React, { useState } from 'react';

const ProductCard = ({ image, name }) => {
  const [showPopup, setShowPopup] = useState(false);

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="w-64 bg-white rounded-lg shadow-md p-4 m-4 hover:shadow-lg transition duration-300">
      <img
        src={image}
        alt={name}
        className="w-full h-70 object-cover rounded-lg mb-4 cursor-pointer"
        onClick={openPopup}
      />
      <h2 className="text-lg font-bold">{name}</h2>

      {/* Popup or Modal */}
      {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="max-w-lg w-full bg-white rounded-lg p-4 relative">
            <img src={image} alt={name} className="w-full rounded-lg" />
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
              onClick={closePopup}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
