import React from "react";

function TodoItem(props){
    return(
        <li className="todo-item">
        <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}>
            ✓
        </span>
        <p className={`TodoItem-p ${props.completed && 'TodoItem-p--completed'}`}>
            {props.text}  
        </p>
        <span className="todo-delete-button">
            <button className="delete-task-button">
                X
            </button>
        </span>
    </li>
    )
}

export {TodoItem};