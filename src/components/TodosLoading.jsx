import "../css/TodosLoading.css"

export default function TodosLoading() {
  return (
    <div className="loading-card">
      <div className="loading-body">
        <p className="loading-text"></p>
        <span className="loading-fecha"></span>
      </div>
      <div className="loading-footer">
        <button></button>
        <button></button>
      </div>
    </div>
  )
}