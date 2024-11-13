import ListMenu from "./ListMenu";

const Sidebar = (props) => {
    return(
        <div>
            <button className="add-list" onClick={props.addList}>Add list</button>
            <div>
                {props.lists.map(list =>
                    <ListMenu   id={list.id} 
                                key={list.id} 
                                name={list.name}
                                display={props.display}
                                deleteList={props.deleteList} 
                                displayList={props.displayList}/>
                )}
            </div>
            <div className="sidebar-bottom"></div>
        </div>
    );
}

export default Sidebar