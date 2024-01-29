import "../css/FilterButton.css"

export default function FilterButton() {
  return (
    <div className="filter">
      <button className="filter-button">
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="#ffffff" d="m11 11l5.76-7.38a1 1 0 0 0-.17-1.4A1 1 0 0 0 16 2H2a1 1 0 0 0-.62.22a1 1 0 0 0-.17 1.4L7 11v5.87a1 1 0 0 0 .29.83l2 2a1 1 0 0 0 1.41 0a1 1 0 0 0 .3-.83zm2 5l5 5l5-5Z"/></svg>
      </button>
      <div className="filter-content">
        <a href="#">Todos</a>
        <a href="#">Completados</a>
        <a href="#">Por completar</a>
      </div>
    </div>
  )
}