import { useEffect, useState } from "react";
import ListItem from "./ListItem";

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
            <input id="itemInput" onSubmit={addItem} type="text" className="add-item" placeholder="add an item"></input>
            <button onClick={() => {
                const el = document.getElementById("itemInput")
                addItem(el.value)
                el.value = "";
                }}>Add</button>
        </div>
    );
}

export default List;