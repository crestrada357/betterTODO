import React from 'react';
import './styles/App.css';
import { AppUI } from './AppUI';

const localStorageTodos = localStorage.getItem('TODOS');
let parsedTodos;

if(!localStorageTodos){
  localStorage.setItem('TODOS', JSON.stringify([]));
  parsedTodos=[];
}else{
  parsedTodos = JSON.parse(localStorageTodos);
}

function App() {
  const [todos, setTodos]= React.useState(parsedTodos);
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

  const saveTodos = (newTodos)=>{
    const stringifiedTodos = JSON.stringify(newTodos);
    localStorage.setItem('TODOS', stringifiedTodos);
    setTodos(newTodos);
  }

  const completeTodo=(text)=>{
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos=[...todos];
    newTodos[todoIndex].completed=true;
    saveTodos(newTodos);
  }
  const deleteTodo=(text)=>{
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos=[...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  }
  return (
    <AppUI
      completedTodos={completedTodos} 
      totalTodos={totalTodos}
      searchValue={searchValue} 
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
