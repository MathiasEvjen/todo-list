
const ListPick = (props) => {

    return(
        <div>
            <button onClick={() => props.displayList(props.id)}>List {props.id}</button>
        </div>
    )
}

export default ListPick