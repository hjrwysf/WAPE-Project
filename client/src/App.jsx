import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import moviesData from './data/movies';
import MovieList from './components/MovieList';
import FilterControls from './components/FilterControls';
import Header from './Header';
import About from './About';
import './App.css';

function App() {
  const [movies] = useState(moviesData);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [sortOrder, setSortOrder] = useState('default');

  const genres = ['All', ...new Set(movies.map((movie) => movie.genre))].sort();

  const filteredMovies = movies.filter((movie) => {
    const matchesSearch = movie.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesGenre =
      selectedGenre === 'All' || movie.genre === selectedGenre;
    return matchesSearch && matchesGenre;
  });

  const sortedMovies = [...filteredMovies].sort((a, b) => {
    if (sortOrder === 'rating-high') return b.rating - a.rating;
    if (sortOrder === 'rating-low') return a.rating - b.rating;
    if (sortOrder === 'title-asc') return a.title.localeCompare(b.title);
    if (sortOrder === 'title-desc') return b.title.localeCompare(a.title);
    return 0;
  });

  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <FilterControls
                  genres={genres}
                  selectedGenre={selectedGenre}
                  setSelectedGenre={setSelectedGenre}
                  searchTerm={searchTerm}
                  setSearchTerm={setSearchTerm}
                  sortOrder={sortOrder}
                  setSortOrder={setSortOrder}
                />
                <MovieList movies={sortedMovies} />
              </>
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;