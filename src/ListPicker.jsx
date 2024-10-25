import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark } from "@fortawesome/free-solid-svg-icons"

const ListPicker = (props) => {
    return(
        <div className="list-picker">
            <button onClick={() => props.displayList(props.id)}>{props.name}</button>
            <button className="delete-button" onClick={() => props.deleteList(props.id)}><FontAwesomeIcon icon={faXmark} /></button>
        </div>
    )
}

export default ListPicker