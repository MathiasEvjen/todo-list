import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark } from "@fortawesome/free-solid-svg-icons"

const ListMenu = (props) => {

    const style = props.display === props.id ? "active" : "inactive"    // Setter bakgrunnsfargen om denne lista blir vist

    return(
        <div className="list-menu">
            <div className={style}>
                <button className="list-menu-button" onClick={() => props.displayList(props.id)}>
                    <div className="list-menu-text">{props.name}</div>
                    <button className="delete-button" onClick={() => props.deleteList(props.id)}>
                        <FontAwesomeIcon icon={faXmark} />
                    </button>
                </button>
            </div>
        </div>
    )
}

export default ListMenu