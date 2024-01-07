// src/components/TVShowCard.tsx
import React, {useState} from 'react';
import { TVShow} from '../../types/types';
import TVShowDetailModal from './TVShowDetailModal';

interface TVShowCardProps {
  tvShow: TVShow;
}

const TVShowCard: React.FC<TVShowCardProps> = ({ tvShow }) => {
  const imageUrl = `https://image.tmdb.org/t/p/w500${tvShow.poster_path}`;
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
      <>
       {/* TV Show Card with onClick to open modal */}
       <div onClick={openModal} className="tv-show-card cursor-pointer">
         {/* Display TV show details using TV show properties */}
         <img src={imageUrl} alt={tvShow.name} className="w-full h-40 object-cover" />
         <h3>{tvShow.name}</h3>
       </div>
 
       {/* TV Show Detail Modal */}
       {isModalOpen && (
         <TVShowDetailModal tvShowDetail={tvShow} onClose={closeModal} />
       )}
     </>
  );
};

export default TVShowCard;
