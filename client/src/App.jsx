import FilterControls from './components/FilterControls'
import { useState } from 'react'
import moviesData from './data/movies'
import MovieList from './components/MovieList'
import './App.css'

function App() {
  const [movies] = useState(moviesData)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedGenre, setSelectedGenre] = useState('All')
  const [sortOrder, setSortOrder] = useState('default')
  const genres = [...new Set(movies.map((movie) => movie.genre))].sort()

  const filteredMovies = movies.filter((movie) => {
    const matchesSearch = movie.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  
    const matchesGenre =
      selectedGenre === 'All' || movie.genre === selectedGenre
  
    return matchesSearch && matchesGenre
  })

  const sortedMovies = [...filteredMovies].sort((a, b) => {
    if (sortOrder === 'rating-high') {
      return b.rating - a.rating
    }
  
    if (sortOrder === 'rating-low') {
      return a.rating - b.rating
    }
  
    if (sortOrder === 'year-new') {
      return b.year - a.year
    }
  
    if (sortOrder === 'year-old') {
      return a.year - b.year
    }
  
    return 0
  })

  return (
    <main className="app">
      <header className="app-header">
        <h1>MOVIES</h1>
        <p className="app-subtitle">
          Discover your next favorite movie
        </p>
      </header>
      <FilterControls
  searchTerm={searchTerm}
  onSearchChange={setSearchTerm}
  selectedGenre={selectedGenre}
  onGenreChange={setSelectedGenre}
  sortOrder={sortOrder}
  onSortChange={setSortOrder}
  genres={genres}
/>

<MovieList movies={sortedMovies} />
    </main>
  )
}

export default App