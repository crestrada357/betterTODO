import React from 'react';
import './styles/App.css';
import { AppUI } from './AppUI';

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
  const completeTodo=(text)=>{
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos=[...todos];
    newTodos[todoIndex].completed=true;
    setTodos(newTodos);
  }
  const deleteTodo=(text)=>{
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos=[...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
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
