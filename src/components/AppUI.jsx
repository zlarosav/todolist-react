import TodoCounter from "./TodoCounter"
import TodoSearch from "./TodoSearch"
import TodoList from "./TodoList"
import TodoItem from "./TodoItem"
import CreateTodoButton from "./CreateTodoButton"
import FilterButton from "./FilterButton"

export default function AppUI({
  todosTotal,
  todosCompleted,
  searchValue,
  setSearchValue,
  searchedTodos,
  completarTodo,
  eliminarTodo
}) {
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