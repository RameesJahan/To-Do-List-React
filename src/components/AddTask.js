import { useState } from "react";

const AddTask = ({setTodos}) => {
  const [todo, setTodo] = useState("");
  
  const addTask = () => {
    if (todo) 
      setTodos((todos) => [...todos, { id: Date.now(), todo, done: false, isEdit:false }]);
    setTodo("");
  };
  
  return (
  <div className="form">
          <input
            className="ipt-add"
            type="text"
            onChange={(e) => setTodo(e.target.value)}
            value={todo}
            placeholder="Enter new task here..."
          />
          <button onClick={addTask}>Add Task</button>
        </div>
  )
}

export default AddTask;