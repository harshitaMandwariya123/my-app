import React, {useState} from 'react';
import { Movie } from 'tmdb-ts';
import MovieDetailModal from './MovieDetailModal';

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
    <div onClick={openModal} className="movie-card cursor-pointer">
      <img src={imageUrl} alt={movie.title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-bold">{movie.title}</h2>
        <p>{movie.release_date}</p>
      </div>
    </div>
    {isModalOpen && (
      <MovieDetailModal movieDetail={movie} onClose={closeModal} />
    )}
  </>
  );
};

export default MovieCard;


