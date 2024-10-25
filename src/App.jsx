import { useEffect, useState } from "react"
import List from "./List"
import Sidebar from "./Sidebar"

function App() {
  const [display, setDisplay] = useState(1)

  const [listPick, setListPick] = useState(() => {
    const localValue = localStorage.getItem("LISTPICK")
    if (localValue == null) return []

    return JSON.parse(localValue)
  })

  useEffect(() => {
    localStorage.setItem("LISTPICK", JSON.stringify(listPick))
  }, [listPick])

  const [lists, setLists] = useState(() => {
    const localValue = localStorage.getItem("LISTS")
    if (localValue == null) return []

    return JSON.parse(localValue)
  })

  useEffect(() => {
    localStorage.setItem("LISTS", JSON.stringify(lists))
  }, [lists])

  function addList() {
    var thisId = lists.length + 1
    setLists(exisstingLists => {
      return [...exisstingLists, {id: thisId}]
    })

    setListPick(exisistingListpicks => {
      return [...exisistingListpicks, {id: thisId}]
    })

    displayList(thisId)
  }

  function displayList(id) {
    console.log("Setter liste til nr. " + id)
    setDisplay(id);
  }

  return (
    <>
      <div className="wrapper">
        <div className="sidebar">
          <Sidebar addList={addList} lists={listPick} displayList={displayList}/>
        </div>
        <div className="main">
          {lists.filter(list => list.id === display).map(list =>
            <List id={list.id} key={list.id}/>
          )}
        </div>
      </div>
    </>
  )
}

export default App
