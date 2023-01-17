import React from 'react';

function TodoCounter({completedTodos, totalTodos}){
    return(
        <h1 className='task-counter'>{completedTodos} out of {totalTodos} tasks done</h1>
    );
}

export {TodoCounter};