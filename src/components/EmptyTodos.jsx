import "../css/EmptyTodos.css"

export default function EmptyTodos() {
  return (
    <div className="empty-card">
      <svg xmlns="http://www.w3.org/2000/svg" width="8em" height="8em" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M40.55 5.5H7.45a2 2 0 0 0-1.95 2v33.1a2 2 0 0 0 2 2h33.1a2 2 0 0 0 2-2V7.45a2 2 0 0 0-2.05-1.95M8.1 13.44h4v4h-4Zm4 18h-4v-4h4Zm-4 3.44h4v4h-4Zm0-25.21h31.69m-24.25 5.77h24.25M15.54 29.49h24.25m-24.25 7.42h24.25m0-12.91H8.1"/></svg>
      <p className="empty-heading">Tu lista está vacía</p>
      <p className="empty-description">Estás a un paso de crear una nueva tarea.</p>

      <div>
        <button className="empty-createButton">Crear tarea</button>
      </div>
    </div>
  )
}