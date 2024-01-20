import '../css/App.css';
import Todo from '../components/Todo';
import TodoForm from '../components/TodoForm';
import TodoFilters from '../components/TodoFilters';
import TodoSearch from '../components/TodoSearch';
import { useState } from 'react';


function App() {

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("ASC");


  const [todos, setTodos] = useState(localStorage.getItem('todos') !== null ? JSON.parse(localStorage.getItem('todos')) : []);


  const addTodo = (title) => {
    const newTodos = [...todos, {
      id: todos.length + 1,
      title: title,
      isComplete: false
    }];

    localStorage.setItem('todos', JSON.stringify(newTodos));

    setTodos(newTodos);
  }

  const removeTodo = (id) => {
    const newTodos = [...todos];
    const filteredTodos = newTodos.filter(todo => todo.id !== id ? todo : null);
    localStorage.setItem('todos', JSON.stringify(filteredTodos));

    setTodos(filteredTodos);
  }



  const completeTodo = id => {
    const newTodos = [...todos];
    newTodos.map(todo => todo.id === id ? todo.isComplete 
      = !todo.isComplete : todo)
    localStorage.setItem('todos', JSON.stringify(newTodos));
    setTodos(newTodos);
  }

  const deleteAll = () => {
    localStorage.setItem('todos', JSON.stringify([]));

    setTodos([]);
  }


  return (
    <div className='containerTodo'>
      <div className='appTodo'>
        <h1>Todo App</h1>
        <TodoForm addTodo={addTodo}/>
        <TodoFilters filter={filter} setFilter={setFilter} sort={sort} setSort={setSort}/>

        <ul className='containerList'>
          {todos
          .filter((todo) => 
            filter === "All" ? true : 
            filter === "Completed" ? todo.isComplete
            : !todo.isComplete)
          .filter((todo) => 
          todo.title.toLocaleLowerCase()
          .includes(search.toLocaleLowerCase()))
          .sort((a, b) => sort === "ASC" 
          ? a.title.localeCompare(b.title)
          : b.title.localeCompare(a.title))
          .map(todo => (
            <Todo key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo}/>
          ))}
        </ul>

        <TodoSearch search={search} setSearch={setSearch}/>
        <button className='cleanAll' onClick={deleteAll}>Limpar Todos</button>
      </div>
    </div>
  );
}

export default App;
