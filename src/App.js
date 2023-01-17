import React from 'react';
import './App.css';
import { TodoCounter } from './TodoCounter';
import { TodoItem } from './TodoItem';
import { TodoList } from './TodoList';
import { TodoSearch } from './TodoSearch';

const defaultTodos=[
  {key: 1, text:"Cut onions", completed:true},
  {key: 2, text:"Grate cheese", completed:false},
  {key: 3, text:"Make dessert", completed:false},
  {key: 4, text:"Learn react", completed:false}
];

function App() {
  const [todos, setTodos]= React.useState(defaultTodos);
  const [searchValue, setSearchValue]= React.useState('');
  const completedTodos=todos.filter(todo=>!!todo.completed).length;
  const totalTodos=todos.length;
  
  let searchedTodos=[];
  if(!searchValue>=1){
    searchedTodos=todos;
  }else{
      searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });

  }
  return (
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
          />
        ))}
      </TodoList>
    </div>
  );
}

export default App;
