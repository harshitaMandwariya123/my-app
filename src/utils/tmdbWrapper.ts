import { TMDB } from 'tmdb-ts';
const accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YjEzYzdkZTYzZDIzZjdiOThkMTFmNDQxOTU0YmFjMCIsInN1YiI6IjY1OTc5NmZkZWQ5NmJjMmU5MWY3YTY2MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.b5-wB4chpnqq6LjNv07YzORgCxGZVLFl-bkiCSyuHBg';

const tmdbApi = new TMDB(
  accessToken,
);

export default tmdbApi;
