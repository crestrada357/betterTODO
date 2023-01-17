import React from "react";
import { TodoCounter } from './components/TodoCounter';
import { TodoItem } from './components/TodoItem';
import { TodoList } from './components/TodoList';
import { TodoSearch } from './components/TodoSearch';

function AppUI({completedTodos, totalTodos, searchValue, setSearchValue, searchedTodos, completeTodo, deleteTodo}){
    return(
        <div className="App">
            <TodoCounter 
                completedTodos={completedTodos} 
                totalTodos={totalTodos}
            />
            <TodoSearch 
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />
            <TodoList>
                {searchedTodos.map(todo=>(
                <TodoItem
                    key={todo.key}
                    text={todo.text}
                    completed={todo.completed}
                    onComplete={()=>completeTodo(todo.text)}
                    onDelete={()=>deleteTodo(todo.text)}
                />
                ))}
            </TodoList>
        </div>
    );
}

export {AppUI};