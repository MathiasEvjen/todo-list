import { useEffect, useState } from "react"
import List from "./List"
import Sidebar from "./Sidebar"

function App() {
  const [display, setDisplay] = useState() // State variabel som holder hvilken liste som skal vises

  // State variabel som holder knappene for å velge liste i sidebaren og henter fra local storage
  const [listPicker, setListPicker] = useState(() => {
    const localValue = localStorage.getItem("LISTPICKER")
    if (localValue == null) return []

    return JSON.parse(localValue)
  })

  // Lagrer listPicker i local storage
  useEffect(() => {
    localStorage.setItem("LISTPICKER", JSON.stringify(listPicker))
  }, [listPicker])

  // State variabel som holder listene i appen og henter fra local storage
  const [lists, setLists] = useState(() => {
    const localValue = localStorage.getItem("LISTS")
    if (localValue == null) return []

    return JSON.parse(localValue)
  })

  // Lagrer listene i local storage
  useEffect(() => {
    localStorage.setItem("LISTS", JSON.stringify(lists))
  }, [lists])

  // Oppretter ny liste og oppdaterer lists-variabel og listPicker variabel og viser den nye lista på skjermen
  function addList() {
    var thisId = lists.length + 1
    setLists(exisstingLists => {
      return [...exisstingLists, {id: thisId}]
    })

    setListPicker(exisistingListpicks => {
      return [...exisistingListpicks, {id: thisId}]
    })

    displayList(thisId)
  }

  // Viser valgt liste på skjermen
  function displayList(id) {
    console.log("Setter liste til nr. " + id)
    setDisplay(id);
  }

  return (
    <>
      <div className="wrapper">
        <div className="sidebar">
          <Sidebar addList={addList} lists={listPicker} displayList={displayList}/>
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
