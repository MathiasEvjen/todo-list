import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
const ListItem = (props) => {

    const priorityStyle = props.itemPriority === "low" ? "list-item-low" : props.itemPriority === "medium" ? "list-item-medium" : "list-item-high"

    return(
        <div className={props.completed ? "list-item" : priorityStyle}>
            <input type="checkbox" checked={props.completed} onChange={e => props.complete(props.id, e.target.checked)}></input>
            <p className="item-text">{props.text} </p>
            <button className="delete-button" onClick={() => props.delete(props.id)}><FontAwesomeIcon icon={faXmark} /></button>
        </div>
    );
}

export default ListItem;