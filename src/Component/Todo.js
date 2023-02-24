import React , {useState} from "react";
// import TodoImg from './Todo/todo.png';
import AddItem from './Todo/add.png';
// import MainImg from './Todo/main.jpg';
import Trash from './Todo/trash.png';

const Todo = () => {
    const [InputData, setInputData] = useState("");
    const [items, setItems] = useState([]);

    // Add the items funciton
    const addItem = () => {
        if(!InputData){
            alert("Plz fill the data");
        }
        else{
            const myNewInput = {
                id: new Date().getTime().toString(),
                name: InputData,
            };
            setItems([... items, myNewInput]);
            setInputData("");
        }
    };

    // how to delete items
    const deleteItem = (index) => {
        const updatedItems = items.filter((curElem) =>{
            return curElem.id !== index;
        });
        setItems(updatedItems);
    };

    // Remove all items
    const removeAll = () =>{
        setItems([]);
    };

    return (
        <>
            <div className="main_div">
                <div className="child_div">
                    <figure>
                        {/* <img src={TodoImg} alt="Todo" /> */}
                        <figcaption>Add your list here 📝</figcaption>
                    </figure>
                    <div className="additems">
                        <input value={InputData} 
                            onChange={(event) => setInputData(event. target. value)} 
                            type="text" 
                            placeholder="Add Your Item" 
                            className="form_control"
                        />
                        <a href="#">
                            <img className="addicon" 
                            src={AddItem} alt="item" 
                            onClick={addItem} />
                        </a>
                    </div>
                    <div className="show_items">
                        {items.map((curElem, index) =>{
                            return(
                                <div className="each_items" key={curElem.id}>
                                    <h3>{curElem.name}</h3>
                                    <div className="todo_btn">
                                        <img className="trash" src={Trash} onClick={() => deleteItem(curElem.id)}/>
                                    </div>
                                </div>
    
                            );
                        })}
                    </div>
                    <div className="btn">
                        <button className="btn_effect" data-sm-link-text="Remove All" onClick={removeAll}>
                            <span>Checklist</span>
                        </button>
                    </div>
                </div>
            </div>  
        </>
    
      );
}

export default Todo;