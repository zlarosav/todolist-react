import "../css/App.css"

import { useState } from "react"

import TodoCounter from "./TodoCounter"
import TodoSearch from "./TodoSearch"
import TodoList from "./TodoList"
import TodoItem from "./TodoItem"
import CreateTodoButton from "./CreateTodoButton"
import FilterButton from "./FilterButton"

export default function App() {
  const defaultTodos = [
    { text: "Cortar cebolla", completed: true, pinned: true },
    { text: "Pelar 10 bananas", completed: false, pinned: true },
    { text: "Llorar con la llorona y con otros llorones texto largo", completed: true, pinned: false },
    { text: "Freír huevos", completed: false, pinned: false },
    { text: "Mirar el curso de React", completed: true, pinned: false },
    { text: "Mirar el curso de CSS", completed: false, pinned: false },
    { text: "Mirar un curso de JavaScript", completed: false, pinned: false },
  ]

  const localStorageTodos = localStorage.getItem("TODO")
  const parsedTodos = (localStorageTodos) ? JSON.parse(localStorageTodos) : defaultTodos
  if (!localStorageTodos) localStorage.setItem("TODO", JSON.stringify(defaultTodos))

  const [ searchValue, setSearchValue ] = useState("")
  const [ todos, setTodos ] = useState(parsedTodos)

  const todosCompleted = todos.filter(todo => todo.completed).length
  const todosTotal = todos.length

  const searchedTodos = todos.filter(todo => {
    const todoText = todo.text.toLowerCase()
    const searchText = searchValue.toLowerCase()

    return todoText.includes(searchText)
  })

  const saveTodos = (newTodos) => {
    localStorage.setItem("TODO", JSON.stringify(newTodos))
    setTodos(newTodos)
  }

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
    <section className="tasks">
      <div className="main">
        <h1>Tus tareas</h1>
        <TodoCounter 
          total={todosTotal} 
          completed={todosCompleted}
        />
        <div className="nav">
          <TodoSearch 
            searchValue={searchValue} 
            setSearchValue={setSearchValue} 
          />
          <CreateTodoButton />
          <FilterButton />
        </div>
      </div>

      <TodoList>
        {searchedTodos.map((todo, index) => <TodoItem 
          todo={todo.text} 
          completed={todo.completed} 
          pinned={todo.pinned} 
          key={index}
          onComplete = {() => completarTodo(index)}
          onDelete = {() => eliminarTodo(index)}
        />)}
      </TodoList>
    </section>
  )
}
