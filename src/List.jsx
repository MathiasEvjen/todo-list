import { useEffect, useState } from "react";
import ListItem from "./ListItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const List = (props) => {
    const [name, setName] = useState("List 1")
    const [items, setItems] = useState(() => {
        const localValue = localStorage.getItem("ITEMS")
        if (localValue == null) return []

        return JSON.parse(localValue)
    })

    useEffect(() => {
        localStorage.setItem("ITEMS", JSON.stringify(items))
    }, [items])

    function addItem(text) {
        setItems(existingItems => {
            return [
                ...existingItems, {text: text, id: Math.random(), completed: false}
            ]
        })
    }

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

    function deleteItem(id) {
        setItems(existingItems => {
            return existingItems.filter(item => item.id !== id)
        })
    }

    return(
        <div>
            <h2>{name}</h2>
            <h3>In progress</h3>
            {items.filter(item => !item.completed).map(item => (
                <ListItem id={item.id} text={item.text} key={item.id} completed={item.completed} complete={complete} delete={deleteItem}/>
            ))}
            <div className="input">
                <input id="itemInput" type="text" className="add-item" placeholder="add an item"></input>
                <button className="add-item-button" onClick={() => {
                    const el = document.getElementById("itemInput")
                    if (el.value != "") addItem(el.value);
                    el.value = "";
                    }}><FontAwesomeIcon icon={faPlus}/></button>
            </div>
            <hr/>
            <div className="completed-items">
                <h3>Completed</h3>
                {items.filter(item => item.completed).map(item => (
                    <ListItem id={item.id} text={item.text} key={item.id} completed={item.completed} complete={complete} delete={deleteItem}/>
                ))}
            </div>
        </div>
    );
}

export default List;