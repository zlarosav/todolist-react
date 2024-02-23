import { useContext, useState } from "react"
import { TodoContext } from "./TodoContext"

import "../css/TodoForm.css"

export default function TodoForm() {
  const { setOpenModal, addTodo } = useContext(TodoContext)
  const [ newTodoValue, setNewTodoValue ] = useState("")

  const onSubmit = (event) => {
    event.preventDefault()
    if (newTodoValue.trim() !== "") {
      addTodo(newTodoValue)
      setOpenModal(false)
    }
  }

  const onChange = (event) => {
    setNewTodoValue(event.target.value)
  }

  return (
    <form onSubmit={onSubmit}>
      <label>Escribe tu nueva tarea</label>
      <textarea
        placeholder="Cortar cebolla para el almuerzo"
        value={newTodoValue}
        onChange={onChange}
      />
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button TodoForm-button--cancel"
          onClick={() => setOpenModal(false)} 
        >Cancelar</button>
        <button
          type="submit"
          className="TodoForm-button TodoForm-button--add"
          disabled={newTodoValue.trim() === ""}
        >Añadir</button>
      </div>
    </form>
  )
}