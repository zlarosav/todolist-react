export default function TodoCounter({ total, completed }) {
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