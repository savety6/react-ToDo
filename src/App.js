import { useState, useEffect } from "react";
import './App.css';
import Form from './components/Form';
import List from './components/List';

function App() {
  //state stuff
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  //use effect
  useEffect(() => {
    getLocalTodos();
  }, []);


  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);
  //Functions
  const filterHandler = () =>{
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true ));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false ));
        break;
      default:
        setFilteredTodos(todos);
        break
    }

  };
  //save local info
  const saveLocalTodos = () => {
      localStorage.setItem('todos', JSON.stringify(todos))
  };

  const getLocalTodos = () => {
    if(localStorage.getItem('todos') === null){
      localStorage.setItem('todos', JSON.stringify([]));
    }else{
      let todoLocal = JSON.parse(localStorage.getItem('todos'));
      setTodos(todoLocal);
    }
  };


  return (
    <div className="App">
      <header>
        <h1>vlad's ToDo List</h1>
      </header>
      <Form  setStatus={setStatus} inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText}/>
      <List filteredTodos={filteredTodos} setTodos={setTodos} todos={todos}/>
    </div>
  );
}

export default App;
