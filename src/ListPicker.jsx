import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark } from "@fortawesome/free-solid-svg-icons"

const ListPicker = (props) => {
    const style = props.display === props.id ? "active" : "inactive"

    return(
        <div className="list-picker">
            <div className={style}>
                <button onClick={() => props.displayList(props.id)}>
                    {props.name} 
                    <button className="delete-button" onClick={() => props.deleteList(props.id)}>
                        <FontAwesomeIcon icon={faXmark} />
                    </button>
                </button>
                
            </div>
        </div>
    )
}

export default ListPicker