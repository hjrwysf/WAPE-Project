import './FilterControls.css'

function FilterControls({
  searchTerm,
  onSearchChange,
  selectedGenre,
  onGenreChange,
  sortOrder,
  onSortChange,
  genres
}) {
  return (
    <div className="filter-controls">
      <input
        type="text"
        placeholder="Search movies..."
        value={searchTerm}
        onChange={(event) => onSearchChange(event.target.value)}
      />

      <select
        value={selectedGenre}
        onChange={(event) => onGenreChange(event.target.value)}
      >
        <option value="All">All Genres</option>

        {genres.map((genre) => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </select>

      <select
        value={sortOrder}
        onChange={(event) => onSortChange(event.target.value)}
      >
        <option value="default">Default</option>
        <option value="rating-high">Highest Rating</option>
        <option value="rating-low">Lowest Rating</option>
        <option value="year-new">Newest First</option>
        <option value="year-old">Oldest First</option>
      </select>
    </div>
  )
}

export default FilterControls