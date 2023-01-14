import './App.css';
import { TodoCounter } from './TodoCounter';
import { TodoItem } from './TodoItem';
import { TodoList } from './TodoList';
import { TodoSearch } from './TodoSearch';

const Todo=[
  {key: 1, text:"Cut onions", completed:true},
  {key: 2, text:"Grate cheese", completed:false},
  {key: 3, text:"Make dessert", completed:false},
  {key: 4, text:"Learn react", completed:false}
];

function App() {
  return (
    <div className="App">
      <TodoCounter/>
      <TodoSearch/>
      <TodoList>
        {Todo.map(todo=>(
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
