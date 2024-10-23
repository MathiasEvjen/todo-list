import { useEffect, useState } from "react"
import List from "./List"
import Sidebar from "./Sidebar"

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
      <div className="wrapper">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="main">
          <List />
        </div>
      </div>
    </>
  )
}

export default App
