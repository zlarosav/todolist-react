import React from "react"
import ReactDOM from "react-dom"

import "../css/Modal.css"

export default function Modal({ children }) {
  return (
    ReactDOM.createPortal(
      (
        <div className="ModalBackground">
          { children }
        </div>
      ),
      document.getElementById("modal")
    )
  )
}