import { useState, createContext } from "react"
import useLocalStorage from "../hooks/useLocalStorage"

const TodoContext = createContext()

const defaultTodos = [
  { text: "Cortar cebolla", completed: true, pinned: true },
  { text: "Pelar 10 bananas", completed: false, pinned: true },
  { text: "Llorar con la llorona y con otros llorones texto largo", completed: true, pinned: false },
  { text: "Freír huevos", completed: false, pinned: false },
  { text: "Mirar el curso de React", completed: true, pinned: false },
  { text: "Mirar el curso de CSS", completed: false, pinned: false },
  { text: "Mirar un curso de JavaScript", completed: false, pinned: false },
]

function TodoProvider({ children }) {

  const { item: todos, saveItem: saveTodos, loading, error } = useLocalStorage("TODO", defaultTodos)
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
    <TodoContext.Provider value={{
      loading,
      error,
      todosTotal,
      todosCompleted,
      searchValue,
      setSearchValue,
      searchedTodos,
      completarTodo,
      eliminarTodo
    }}>
      { children }
    </TodoContext.Provider>
  )
}

export { TodoContext, TodoProvider }