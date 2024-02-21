import "../css/TodosError.css"

export default function TodosError() {
  return (
    <div className="error-card">
      <svg xmlns="http://www.w3.org/2000/svg" width="6em" height="6em" viewBox="0 0 24 24"><path fill="#ffffff" d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12S5.925 1 12 1m-1 13h2V6.5h-2zm2.004 1.5H11v2.004h2.004z"/></svg>
      <p className="error-heading">¡Ha ocurrido un error!</p>
      <p className="error-description">Algo ha salido mal. Recarga la página, esto puede solucionar tu error.</p>
    </div>
  )
}