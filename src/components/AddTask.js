import { useState , useRef} from "react";

const AddTask = ({setTodos}) => {
  const [todo, setTodo] = useState("");
  const inputRef = useRef(null);
  
  const addTask = () => {
    if (todo) 
      setTodos((eTodos) => [{ id: Date.now(), todo, done: false, isEdit:false },...eTodos]);
    setTodo("");
    inputRef.current.focus();
  };
  
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      addTask();
    }
  }
  
  return (
  <div className="form">
          <input
            ref={inputRef}
            className="ipt-add"
            type="text"
            onChange={(e) => setTodo(e.target.value)}
            onKeyPress={handleKeyDown}
            value={todo}
            placeholder="Enter new task here..."
          />
          <button onClick={addTask}>Add Task</button>
        </div>
  )
}

export default AddTask;