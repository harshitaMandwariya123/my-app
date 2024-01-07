import React from 'react';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router';

const Header: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    // Check for exact match
    return location.pathname === path;
  };

  return (
    <header className="bg-gradient-to-r from-red-600 to-purple-800 text-white">
      <div className="container mx-auto py-4">
        <div className="flex justify-between items-center">
          <nav className="flex space-x-4">
            <NavLink
              to="/movies"
              className={`hover:text-gray-300 ${isActive('/movies') ? 'text-red-500' : ''}`}
            >
              Movies
            </NavLink>
            <NavLink
              to="/tv-shows"
              className={`hover:text-gray-300 ${isActive('/tv-shows') ? 'text-red-500' : ''}`}
            >
              Series
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;