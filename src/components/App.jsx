import "../css/App.css"

import AppUI from "./AppUI"
import { TodoProvider } from "./TodoContext"

export default function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  )
}