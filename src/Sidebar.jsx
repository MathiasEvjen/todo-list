import ListPick from "./ListPick";

const Sidebar = (props) => {
    return(
        <div>
            <button className="add-list" onClick={props.addList}>Add list</button>
            <div>
                {props.lists.map(list =>
                    <ListPick id={list.id} key={list.id} displayList={props.displayList}/>
                )}
            </div>
        </div>
    );
}

export default Sidebar