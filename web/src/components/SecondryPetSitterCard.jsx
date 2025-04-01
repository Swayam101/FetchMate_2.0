import React from 'react';
import PropTypes from 'prop-types';
import { FaMapMarkerAlt, FaUserCircle } from 'react-icons/fa';

const SecondryPetSitterCard = ({ setSelected, image, name, location, selected, keyProp }) => {
  const handleImageError = (e) => {
    e.target.onerror = null; // Prevent infinite loop
    e.target.src = ''; // Clear the src to trigger the fallback
  };

  return (
    <div
      onClick={() => setSelected(keyProp)}
      className={`
        relative flex flex-col items-center p-6 rounded-xl border-2 transition-all duration-200 cursor-pointer
        ${selected === keyProp 
          ? 'border-[#FF9F1C] bg-[#FF9F1C]/5 shadow-lg' 
          : 'border-gray-200 hover:border-[#FF9F1C] hover:bg-gray-50'
        }
      `}
    >
      {/* Profile Image */}
      <div className="relative mb-4">
        {image ? (
          <img 
            className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md" 
            src={image} 
            alt={`${name}'s profile`}
            onError={handleImageError}
          />
        ) : (
          <div className="w-24 h-24 rounded-full border-4 border-white shadow-md bg-gray-100 flex items-center justify-center">
            <FaUserCircle className="w-20 h-20 text-gray-400" />
          </div>
        )}
        {selected === keyProp && (
          <div className="absolute -top-2 -right-2 bg-[#FF9F1C] text-white rounded-full p-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
        )}
      </div>

      {/* Sitter Info */}
      <div className="text-center space-y-2">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <div className="flex items-center justify-center text-gray-600 text-sm">
          <FaMapMarkerAlt className="mr-1" />
          <span>{location}</span>
        </div>
      </div>

      {/* Hover Effect Overlay */}
      <div className={`
        absolute inset-0 rounded-xl transition-opacity duration-200
        ${selected === keyProp ? 'opacity-0' : 'opacity-0 hover:opacity-100'}
        bg-[#FF9F1C]/5
      `} />
    </div>
  );
};

SecondryPetSitterCard.propTypes = {
  setSelected: PropTypes.func.isRequired,
  image: PropTypes.string,
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  selected: PropTypes.number.isRequired,
  keyProp: PropTypes.number.isRequired,
};

export default SecondryPetSitterCard;
