import { useContext } from "react"
import { TodoContext } from "./TodoContext"

export default function TodoCounter() {
  const { todosTotal: total, todosCompleted: completed } = useContext(TodoContext)

  if (total != 0 && (completed == total)) {
    return (
        <h2>¡Completaste todas!</h2>
    )
  } else {
    return (
      <h2>Has completado {completed} de {total}</h2>
    )
  }
}