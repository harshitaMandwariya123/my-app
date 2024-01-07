import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer'; 
import Movies from './components/movies/Movies';
import TVShows from './components/tvshows/TVShows';
import Home from './components/common/Home';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <div className="flex-grow">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/tv-shows" element={<TVShows />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
