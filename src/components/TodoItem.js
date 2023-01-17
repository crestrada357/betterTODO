import React from "react";

function TodoItem(props){

    return(
        <li className="todo-item">
        <button 
            className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
            onClick={props.onComplete}
        >
            ✓
        </button>
        <p className={`TodoItem-p ${props.completed && 'TodoItem-p--completed'}`}>
            {props.text}  
        </p>
        <span className="todo-delete-button">
            <button 
                className="delete-task-button"
                onClick={props.onDelete}
            >
                X
            </button>
        </span>
    </li>
    )
}

export {TodoItem};