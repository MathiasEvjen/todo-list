import { useEffect, useState } from "react"
import List from "./List"
import Sidebar from "./Sidebar"

function App() {
  const [display, setDisplay] = useState() // State variabel som holder hvilken liste som skal vises
  const [listCount, setListCount] = useState(1) // State variabel som holder antall lister 

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
    var thisId = listCount
    setLists(existingLists => {
      return [...existingLists, {id: thisId, name: `List ${thisId}`}]
    })

    setListPicker(existingListpicks => {
      return [...existingListpicks, {id: thisId, name: `List ${thisId}`}]
    })

    setListCount(c => c + 1)

    displayList(thisId)
  }

  // Viser valgt liste på skjermen
  function displayList(id) {
    console.log("Setter liste til nr. " + id)
    setDisplay(id);
  }

  // Endrer navnet på lista
  function changeName(newName, id) {
    setLists(existingLists => {
      return existingLists.map(list => 
        list.id === id ? { ...list, name: newName } : list
    )});

    setListPicker(existingLists => {
      return existingLists.map(list =>
        list.id === id ? { ...list, name: newName } : list 
      )})
  }

  // Sletter valgt liste
  function deleteList(id) {
    setLists(existingLists => {
      const updatedList = existingLists.filter(list => list.id != id)

      localStorage.setItem("LISTS", JSON.stringify(updatedList))

      return updatedList
    })

    setListPicker(existingListpicks => {
      const updatedListPicker = existingListpicks.filter(list => list.id != id)

      localStorage.setItem("LISTPICKER", JSON.stringify(updatedListPicker))

      return updatedListPicker
    })

    localStorage.removeItem(`ITEMS${id}`)
  } 

  return (
    <>
      <div className="wrapper">
        <div className="sidebar">
          <Sidebar addList={addList} lists={listPicker} deleteList={deleteList} displayList={displayList}/>
        </div>
        <div className="main">
          {lists.filter(list => list.id === display).map(list =>
            <List id={list.id} name={list.name} key={list.id} changeName={changeName}/>
          )}
        </div>
      </div>
    </>
  )
}

export default App
