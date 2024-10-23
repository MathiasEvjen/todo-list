import { useEffect, useState } from "react"
import List from "./List"
import ListItem from "./ListItem"

function App() {
  const [display, setDisplay] = useState(1)

  const [lists, setLists] = useState(() => {
    const localValue = localStorage.getItem("LISTS")
    if (localValue == null) return []

    return JSON.parse(localValue)
  })

  useEffect(() => {
    localStorage.setItem("LISTS", JSON.stringify(lists))
  }, [lists])

  function addList() {
    setLists(exisistingLists => {
      return [...exisistingLists, {id: exisistingLists.length + 1}]
    })
  }

  function displayList(id) {
    setDisplay(id);
  }

  return (
    <>
      <List />
    </>
  )
}

export default App
