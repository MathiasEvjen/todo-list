import { useEffect, useState } from "react";
import ListItem from "./ListItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const List = (props) => {
    const [name, setName] = useState(`List ${props.id}`)  // State variabel for å holde listas navn
    
    // State variabel for å holde listens gjøremål som hentes fra localstorage
    const [items, setItems] = useState(() => {
        const localValue = localStorage.getItem(`ITEMS${props.id}`)
        if (localValue == null) return []

        return JSON.parse(localValue)
    })

    // Lagrer listens gjøremål i local storage
    useEffect(() => {
        localStorage.setItem(`ITEMS${props.id}`, JSON.stringify(items))
    }, [items])

    // Oppretter nytt gjøremål og legger i items-variabel
    function addItem(text) {
        setItems(existingItems => {
            return [
                ...existingItems, {text: text, id: Math.random(), completed: false}
            ]
        })
    }

    // Setter et spesifikt gjøremål som fullført
    function complete(id, completed) {
        setItems(existingItems => {
            return existingItems.map(item => {
                if (item.id === id) {
                    return {...item, completed}
                }

                return item
            })
        })
    }

    // Sletter et spesifikt gjøremål
    function deleteItem(id) {
        setItems(existingItems => {
            return existingItems.filter(item => item.id !== id)
        })
    }

    return(
        <div>
            <h2>{name}</h2>
            <h3>In progress</h3>
            {items.filter(item => !item.completed).length === 0 && "No in progress todos"}
            {items.filter(item => !item.completed).map(item => (
                <ListItem id={item.id} text={item.text} key={item.id} completed={item.completed} complete={complete} delete={deleteItem}/>
            ))}
            <div className="input">
                <input id="itemInput" type="text" className="add-item" placeholder="Add an item"></input>
                <button className="add-item-button" onClick={() => {
                    const el = document.getElementById("itemInput")
                    if (el.value != "") addItem(el.value);
                    el.value = "";
                    }}><FontAwesomeIcon icon={faPlus}/></button>
            </div>
            <hr/>
            <div className="completed-items">
                <h3>Completed</h3>
                {items.filter(item => item.completed).length === 0 && "No completed todos"}
                {items.filter(item => item.completed).map(item => (
                    <ListItem id={item.id} text={item.text} key={item.id} completed={item.completed} complete={complete} delete={deleteItem}/>
                ))}
            </div>
        </div>
    );
}

export default List;