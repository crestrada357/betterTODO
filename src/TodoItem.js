import React from "react";

function TodoItem(props){
    const onClickButton = (msg) => {
        alert(msg);
    };
    return(
        <li className="todo-item">
        <button 
            className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
            onClick={() => onClickButton('Aquí se debería abrir el modal')}
        >
            ✓
        </button>
        <p className={`TodoItem-p ${props.completed && 'TodoItem-p--completed'}`}>
            {props.text}  
        </p>
        <span className="todo-delete-button">
            <button 
                className="delete-task-button"
            >
                X
            </button>
        </span>
    </li>
    )
}

export {TodoItem};