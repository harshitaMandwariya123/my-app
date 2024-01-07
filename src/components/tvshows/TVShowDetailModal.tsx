import React, { useState } from 'react';
import { TVShowDetail } from '../../types/types';

interface TVShowDetailModalProps {
  tvShowDetail: TVShowDetail;
  onClose: () => void;
}

const TVShowDetailModal: React.FC<TVShowDetailModalProps> = ({ tvShowDetail, onClose }) => {
  const [isImageLoading, setImageLoading] = useState(true);

  const handleImageLoad = () => {
    setImageLoading(false);
  };

  return (
    <div className="fixed inset-0 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 transition-opacity"
          aria-hidden="true"
          onClick={onClose} // Close the modal when clicking outside of it
        >
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <div
          className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-md sm:w-full"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          {/* Close button (X icon) */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-gray-200 rounded-full hover:bg-gray-300 focus:outline-none focus:ring focus:border-blue-300"
          >
            <span className="text-gray-700">×</span>
          </button>
          
          {/* Modal content */}
          <div className="bg-white p-4">
            {isImageLoading && (
              <div className="flex items-center justify-center h-32">
                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-indigo-500"></div>
              </div>
            )}
            {/* Display TV show details */}
            <img
              src={`https://image.tmdb.org/t/p/w500/${tvShowDetail.poster_path}`}
              alt={tvShowDetail.name}
              className={`w-full ${isImageLoading ? 'hidden' : 'block'}`}
              onLoad={handleImageLoad}
            />
            <h1 className="text-3xl font-semibold mb-4">{tvShowDetail.name}</h1>
            <p>{tvShowDetail.first_air_date}</p>
            <p>{tvShowDetail.overview}</p>
            <p>Popularity: {tvShowDetail.popularity}</p>
            <p>Vote Count: {tvShowDetail.vote_count}</p>
            <p>Vote Average: {tvShowDetail.vote_average}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TVShowDetailModal;
