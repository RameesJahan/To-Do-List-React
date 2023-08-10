import "./styles/App.css";
import React,{ useState,useEffect } from "react";

import AddTask from "./components/AddTask";
import TodoList from "./components/TodoList";

function App() {
  
  const storedTodos = JSON.parse(localStorage.getItem("TODOS"))
  const [todos, setTodos] = useState(storedTodos || []);
  
  
  useEffect(() => {
    localStorage.setItem('TODOS',JSON.stringify(todos));
  }, [todos]);
  
  return (
    <div className="container">
      <h2>Things To Do...</h2>
      <AddTask setTodos={setTodos}/>
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}


export default App;
