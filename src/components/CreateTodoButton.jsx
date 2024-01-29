import "../css/CreateTodoButton.css"

export default function CreateTodoButton() {
  return (
    <button className="create" onClick={() => console.log("Creaste un nuevo todo")}>
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="#ffffff" d="M11 13v3q0 .425.288.713T12 17q.425 0 .713-.288T13 16v-3h3q.425 0 .713-.288T17 12q0-.425-.288-.712T16 11h-3V8q0-.425-.288-.712T12 7q-.425 0-.712.288T11 8v3H8q-.425 0-.712.288T7 12q0 .425.288.713T8 13zm-6 8q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21z"/></svg>
    </button>
  )
}