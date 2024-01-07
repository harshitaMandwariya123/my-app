import React, { useEffect, useState } from 'react';
import tmdbApi from '../../utils/tmdbWrapper';
import MovieCard from './MovieCard';
import { Movie } from '../../types/types';

const Movies: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const response = await tmdbApi.movies.popular({ page });
        setMovies(response.results);
        setTotalPages(response.total_pages);
      } catch (error) {
        console.error('Error fetching movies:', error);
      } finally {
        setLoading(false); 
      }
    };

    fetchMovies();
  }, [page]);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  return (
    <div className="container mx-auto my-8">
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {/* Movie cards */}
        {loading ? (
          // Loader while movies are being fetched
          <div className="flex items-center justify-center h-screen">
            <div className="animate-spin border-t-4 border-gray-500 h-32 w-32"></div>
          </div>
        ) : (
          movies.map((movie) => (
              <MovieCard movie={movie} />
          ))
        )}
      </div>

      <div className="flex-grow"></div>
        <div className="flex justify-center h-16">
          <button
            onClick={() => handlePageChange(page - 1)}
            disabled={page === 1}
            className="mx-1 px-3 py-2 bg-gray-300 text-gray-700 rounded-md cursor-pointer"
          >
            Previous
          </button>

          <span className="mx-2 text-gray-700">
            Page {page} of {totalPages}
          </span>

          <button
            onClick={() => handlePageChange(page + 1)}
            disabled={page === totalPages}
            className="mx-1 px-3 py-2 bg-gray-300 text-gray-700 rounded-md cursor-pointer"
          >
            Next
          </button>
        </div>
    </div>
  );
};

export default Movies;
