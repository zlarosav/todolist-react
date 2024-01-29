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
    { text: "Pelar papa", completed: false, pinned: true },
    { text: "Cortarse el cabello en la barbería de la esquina antes del Domingo", completed: true, pinned: false },
    { text: "Freír huevos", completed: false, pinned: false },
    { text: "Mirar un tutorial de React", completed: true, pinned: false },
    { text: "Mirar un tutorial de CSS", completed: false, pinned: false },
    { text: "Mirar un tutorial de JavaScript", completed: false, pinned: false },
  ]

  const [ searchValue, setSearchValue ] = useState("")
  const [ todos, setTodos ] = useState(defaultTodos)

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
    setTodos(newTodos)
  }

  const eliminarTodo = (todoIndex) => {
    const newTodos = [...todos]
    newTodos.splice(todoIndex, 1)
    setTodos(newTodos)
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
