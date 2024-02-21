import TodoCounter from "./TodoCounter"
import TodoSearch from "./TodoSearch"
import TodoList from "./TodoList"
import TodoItem from "./TodoItem"
import CreateTodoButton from "./CreateTodoButton"
import FilterButton from "./FilterButton"
import TodosLoading from "./TodosLoading"
import TodosError from "./TodosError"
import EmptyTodos from "./EmptyTodos"

export default function AppUI({
  loading,
  error,
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
        {loading && <h2>se están cargando</h2>}
        {error && <h2>deberían estar aquí</h2>}
        {(!loading && !error) && <TodoCounter 
          total={todosTotal} 
          completed={todosCompleted}
        />}
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
        {loading && <><TodosLoading /><TodosLoading /><TodosLoading /></>}
        {error && <TodosError />}
        {(!loading && searchedTodos.length == 0) && <EmptyTodos />}
        {(!loading && !error) && searchedTodos.map((todo, index) => <TodoItem 
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