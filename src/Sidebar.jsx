import ListPick from "./ListPicker";

const Sidebar = (props) => {
    return(
        <div>
            <button className="add-list" onClick={props.addList}>Add list</button>
            <div>
                {props.lists.map(list =>
                    <ListPick id={list.id} key={list.id} name={list.name} deleteList={props.deleteList} displayList={props.displayList}/>
                )}
            </div>
            <div className="sidebar-bottom"></div>
        </div>
    );
}

export default Sidebar