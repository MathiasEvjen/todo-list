import { useEffect, useState } from "react";
import ListItem from "./ListItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const List = (props) => {
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
                ...existingItems, {text: text, id: Math.random()}
            ]
        })
    }

    function deleteItem(id) {
        setItems(existingItems => {
            return existingItems.filter(item => item.id !== id)
        })
    }

    return(
        <div>
            <h2>{props.navn}</h2>
            {items.map(item => (
                <ListItem id={item.id} text={item.text} key={item.id} delete={deleteItem}/>
            ))}
            <div className="input">
                <input id="itemInput" onSubmit={addItem} type="text" className="add-item" placeholder="add an item"></input>
                <button className="add-item-button" onClick={() => {
                    const el = document.getElementById("itemInput")
                    if (el.value != "") addItem(el.value);
                    el.value = "";
                    }}><FontAwesomeIcon icon={faPlus}/></button>
            </div>
        </div>
    );
}

export default List;