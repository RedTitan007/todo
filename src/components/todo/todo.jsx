import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { storetododata, deletetododata } from '../../redux/todo/todo-actions'

const Todo = () => {
    const [data, setData] = useState("");
    const { currentUser } = useSelector(state => state.user)
    const { tododata } = useSelector(state => state.todo)
    const dispatch = useDispatch();

    const addData = () => {
        if(data!==null && data!==""){
        if (tododata.some(a => a.trim().toUpperCase() === data.trim().toUpperCase())) {
            alert("Item Already Exist")
        }
        else {
            dispatch(storetododata(data));
        }
        setData("");
    }
    else{
        alert("No item to add");
    }
    }
    const deleteData = (index) => {
        dispatch(deletetododata(index));
    }
    return (
        <div>
            <h3>{`Welcome ${currentUser.username}`}</h3>
            <h2>Add your item</h2>
            <input id="todo" type="text" value={data} name="todo" placeholder="Add your item"
                onChange={(e) => setData(e.target.value)}
            />
            <button type="submit" onClick={addData}>Add</button>
            <div className="todo-list">
                <ul>
                    {
                        tododata.map((a, index) => {
                            return (
                                <div className="list-data">
                                    <li key={index}>{a}</li>&nbsp;
                                    <button key={index} type="submit" onClick={() => deleteData(index)}>Delete</button>
                                </div>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default Todo
