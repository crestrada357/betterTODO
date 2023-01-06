import './App.css';
import { TodoCounter } from './TodoCounter';
import { TodoList } from './TodoList';
import { TodoSearch } from './TodoSearch';

function App() {
  return (
    <div className="App">
      <TodoCounter/>
      <TodoSearch/>
      <TodoList/>
    </div>
  );
}

export default App;
