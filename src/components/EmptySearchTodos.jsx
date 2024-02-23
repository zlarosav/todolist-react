import "../css/emptySearchTodos.css"

export default function EmptySearchTodos() {
  return (
    <div className="emptySearch-card">
      <svg xmlns="http://www.w3.org/2000/svg" width="8em" height="8em" viewBox="0 0 24 24"><path fill="#ffffff" d="M7 22q-2.075 0-3.537-1.463T2 17q0-2.075 1.463-3.537T7 12q2.075 0 3.538 1.463T12 17q0 2.075-1.463 3.538T7 22m13.6-1l-6.4-6.4q-.3-.325-.637-.662T12.9 13.3q.95-.6 1.525-1.6T15 9.5q0-1.875-1.312-3.187T10.5 5Q8.625 5 7.313 6.313T6 9.5q0 .15.013.288t.037.287q-.45.05-.987.2t-.963.35q-.05-.275-.075-.55T4 9.5q0-2.725 1.888-4.612T10.5 3q2.725 0 4.613 1.888T17 9.5q0 1.075-.337 2.038t-.938 1.762L22 19.6zM5.225 19.475L7 17.7l1.75 1.775l.725-.7L7.7 17l1.775-1.775l-.7-.7L7 16.3l-1.775-1.775l-.7.7L6.3 17l-1.775 1.775z"/></svg>
      <p className="emptySearch-heading">No hay resultados</p>
      <p className="emptySearch-description">No se ha encontrado una tarea con el contenido buscado.</p>
    </div>
  )
}