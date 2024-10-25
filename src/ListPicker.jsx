
const ListPicker = (props) => {
    return(
        <div className="list-picker">
            <button onClick={() => props.displayList(props.id)}>List {props.id}</button>
        </div>
    )
}

export default ListPicker