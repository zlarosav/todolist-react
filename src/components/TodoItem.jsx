import "../css/TodoItem.css"

function DeleteButton({ onDelete }) {
  return (
    <button className="delete-button" onClick={onDelete}>
      <svg xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em" viewBox="0 0 24 24"><path fill="#ffffff" d="M12 2a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8a8 8 0 0 0 8 8a8 8 0 0 0 8-8a8 8 0 0 0-8-8m4 6v7a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-7zm-2.5-4l1 1H17v2H7V7h2.5l1-1z"/></svg>
      <p>Borrar</p>
    </button>
  )
}

function PinnedButton({ pinned }) {
  return (
    <button className={(pinned) ? "fijado" : "fijar"}>
      <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 26 26"><g fill="#ffffff" fillRule="evenodd" clipRule="evenodd"><path d="M14.685 6.902a1 1 0 0 0-1.388.273l-2.509 3.736l-1.66-1.115l2.509-3.736a3 3 0 0 1 4.163-.818l3.32 2.23a3 3 0 0 1 .819 4.163L17.43 15.37l-1.66-1.115l2.508-3.736a1 1 0 0 0-.273-1.388zm-9.168 4.685a1 1 0 0 1 1.387-.273l9.963 6.69a1 1 0 1 1-1.115 1.66l-9.963-6.69a1 1 0 0 1-.272-1.387"/><path d="M9.323 11.41c-.41.053-.786.14-.995.245c-.203.103-.49.346-.77.633a7.793 7.793 0 0 0-.404.449l-.021.026l-.004.005a1 1 0 0 1-1.564-1.247l.782.623l-.782-.623l.002-.002l.003-.004l.01-.012l.032-.04l.116-.137c.097-.112.235-.267.399-.434c.305-.313.783-.76 1.298-1.022c.531-.268 1.195-.386 1.641-.444a9.829 9.829 0 0 1 .789-.07l.053-.001h.023l.026.952l-.025-.953a1 1 0 0 1 .054 2h-.001l-.027-1l.028 1h-.008l-.034.001l-.14.008a7.822 7.822 0 0 0-.48.047m6.543 4.393c.105.4.168.781.15 1.015c-.02.226-.136.583-.295.952a7.808 7.808 0 0 1-.263.544l-.016.029l-.003.006a1 1 0 0 0 1.746.976l-.873-.488l.873.488l.001-.003l.003-.004l.007-.014l.025-.045a9.725 9.725 0 0 0 .334-.692c.174-.401.407-1.014.454-1.59c.047-.592-.095-1.252-.21-1.686a9.872 9.872 0 0 0-.235-.757l-.018-.05l-.005-.014l-.002-.005v-.002c-.001-.001-.001-.001-.893.337l.892-.338a1 1 0 0 0-1.87.707v.001l.935-.354c-.935.354-.936.353-.936.353l.003.007l.012.033l.045.132c.039.116.09.278.139.462m-4.539-.313a1 1 0 0 1 .273 1.387l-1.673 2.49a1 1 0 1 1-1.66-1.114l1.672-2.491a1 1 0 0 1 1.388-.273"/><path d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13"/></g></svg>
      <p>{(pinned) ? "Fijado" : "Fijar"}</p>
    </button>
  )
}

function CompletedButton({ completed, onComplete }) {
  return (
    <button className={(completed) ? "completado" : "completar"} onClick={onComplete}>
      <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24"><g fill="none" stroke="#ffffff" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="m8 12.5l3 3l5-6"/><circle cx="12" cy="12" r="10"/></g></svg>
      <p>{(completed) ? "Completado" : "Completar"}</p>
    </button>
  )
}

export default function TodoItem({ todo, completed, pinned, onComplete, onDelete }) {
  return (
    <div className={(completed) ? "card card-completado" : "card"}>
      <div className="body">
        <p className="text">{todo}</p>
        <span className="fecha">Hace un momento</span>
      </div>
      <div className="footer">
        <CompletedButton completed={completed} onComplete={onComplete} />
        {(completed) ? <DeleteButton onDelete={onDelete} /> : <PinnedButton pinned={pinned} />}
      </div>
    </div>
  )
}