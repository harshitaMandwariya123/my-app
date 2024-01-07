import React, { useEffect, useState } from 'react';
import tmdbApi from '../../utils/tmdbWrapper';
import TVShowCard from './TvShowsCard';
import { TVShow } from '../../types/types';

const TVShows: React.FC = () => {
  const [tvShows, setTVShows] = useState<TVShow[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTVShows = async () => {
      try {
        setLoading(true); // Set loading to true when starting to fetch TV shows
        const response = await tmdbApi.search.multi({
          query: 'tv', // Search for TV shows
          page,
        });

        // Filter out non-TV show results
        const tvShows = response.results.filter(
          (result) => result.media_type === 'tv'
        ) as TVShow[];

        setTVShows(tvShows);
        setTotalPages(response.total_pages);
      } catch (error) {
        console.error('Error fetching TV shows:', error);
      } finally {
        setLoading(false); // Set loading to false after fetching TV shows, whether successful or not
      }
    };

    fetchTVShows();
  }, [page]);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  return (
    <div className="container mx-auto my-8">
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {/* TV show cards */}
        {loading ? (
          // Loader while TV shows are being fetched
          <div className="flex items-center justify-center h-screen">
            <div className="animate-spin border-t-4 border-gray-500 h-32 w-32"></div>
          </div>
        ) : (
          // Render TV shows when not loading
          tvShows.map((tvShow) => (
            <TVShowCard key={tvShow.id} tvShow={tvShow} />
          ))
        )}
      </div>

      {/* Spacer to push the pagination to the bottom */}
      <div className="flex-grow"></div>

      {/* Pagination container with fixed height */}
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

export default TVShows;
