/**
 * Header component that displays the app title and filtering controls.
 * Includes search bar, sort options, and genre filter dropdown.
 *
 * @param {Object} props
 * @param {string} props.searchTerm - Current search term
 * @param {Function} props.setSearchTerm - Updates search term
 * @param {string} props.sortOption - Current sort option
 * @param {Function} props.setSortOption - Updates sort option
 * @param {string} props.selectedGenre - Current selected genre ID
 * @param {Function} props.setSelectedGenre - Updates selected genre
 * @param {Array} props.genres - Array of genre objects
 * @returns {JSX.Element} The rendered header with controls
 */
export default function Header({
  searchTerm,
  setSearchTerm,
  sortOption,
  setSortOption,
  selectedGenre,
  setSelectedGenre,
  genres,
}) {
  return (
    <header className="app-header">
      <h1>🎙️ Podcast App</h1>
      
      <div className="controls">
        <input
          type="text"
          placeholder="Search podcasts..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />

        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="sort-select"
        >
          <option value="a-z">A-Z</option>
          <option value="z-a">Z-A</option>
          <option value="most-recent">Most Recent</option>
          <option value="oldest">Oldest</option>
        </select>

        <select
          value={selectedGenre}
          onChange={(e) => setSelectedGenre(e.target.value)}
          className="genre-select"
        >
          <option value="all">All Genres</option>
          {genres.map((genre) => (
            <option key={genre.id} value={genre.id}>
              {genre.title}
            </option>
          ))}
        </select>
      </div>
    </header>
  );
}
