import "../css/App.css"

import { useState } from "react"
import useLocalStorage from "../hooks/useLocalStorage"

import AppUI from "./AppUI"

/*   const defaultTodos = [
  { text: "Cortar cebolla", completed: true, pinned: true },
  { text: "Pelar 10 bananas", completed: false, pinned: true },
  { text: "Llorar con la llorona y con otros llorones texto largo", completed: true, pinned: false },
  { text: "Freír huevos", completed: false, pinned: false },
  { text: "Mirar el curso de React", completed: true, pinned: false },
  { text: "Mirar el curso de CSS", completed: false, pinned: false },
  { text: "Mirar un curso de JavaScript", completed: false, pinned: false },
] */

export default function App() {
  const [ todos, saveTodos ] = useLocalStorage("TODO", [])

  const [ searchValue, setSearchValue ] = useState("")

  const todosCompleted = todos.filter(todo => todo.completed).length
  const todosTotal = todos.length

  const searchedTodos = todos.filter(todo => {
    const todoText = todo.text.toLowerCase()
    const searchText = searchValue.toLowerCase()

    return todoText.includes(searchText)
  })

  const completarTodo = (todoIndex) => {
    const newTodos = [...todos]
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed
    saveTodos(newTodos)
  }

  const eliminarTodo = (todoIndex) => {
    const newTodos = [...todos]
    newTodos.splice(todoIndex, 1)
    saveTodos(newTodos)
  }

  return (
    <AppUI 
      todosTotal = {todosTotal}
      todosCompleted = {todosCompleted}
      searchValue = {searchValue}
      setSearchValue = {setSearchValue}
      searchedTodos = {searchedTodos}
      completarTodo = {completarTodo}
      eliminarTodo = {eliminarTodo}
    />
  )
}