import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const ListItem = (props) => {
    return(
        <div className="list-item">
            <input type="checkbox"></input>
            <p>{props.text} </p>
            <button className="delete-button" onClick={() => props.delete(props.id)}><FontAwesomeIcon icon={faXmark} /></button>
        </div>
    );
}

export default ListItem;