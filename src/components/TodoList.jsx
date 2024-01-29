import "../css/TodoList.css"

export default function TodoList({ children }) {
  return (
    <div className="tasks-cards">
      {children}
    </div>
  )
}