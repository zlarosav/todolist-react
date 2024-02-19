import { useState } from "react"

export default function useLocalStorage(itemName, initialValue) {
  const localStorageItem = localStorage.getItem(itemName)
  if (!localStorageItem) localStorage.setItem(itemName, JSON.stringify(initialValue))

  const parsedItem = (localStorageItem) ? JSON.parse(localStorageItem) : initialValue
  const [ item, setsItem ] = useState(parsedItem)

  const saveItems = (newItems) => {
    localStorage.setItem(itemName, JSON.stringify(newItems))
    setsItem(newItems)
  }

  return [ item, saveItems ]
}
