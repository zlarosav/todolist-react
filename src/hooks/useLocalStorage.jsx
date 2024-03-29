import { useEffect, useState } from "react"

export default function useLocalStorage(itemName, initialValue) {
  const [ item, setItem ] = useState(initialValue)
  const [ loading, setLoading ] = useState(true)
  const [ error, setError ] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName)
  
        let parsedItem
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue))
          parsedItem = initialValue
        } else {
          parsedItem = JSON.parse(localStorageItem)
          setItem(parsedItem)
        }
    
        setLoading(false)
      } catch (e) {
        console.log(e)
        setLoading(false)
        setError(true)
      }
    }, 3000)
  }, [])

  const saveItem = (newItems) => {
    localStorage.setItem(itemName, JSON.stringify(newItems))
    setItem(newItems)
  }

  return { item, saveItem, loading, error }
}