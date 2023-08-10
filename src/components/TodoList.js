import React,{ useState } from "react";

import TodoItem from "./TodoItem";
import Dialog from "./Dialog";

const TodoList = ({todos,setTodos}) => {
  
  const [showDialog, setShowDialog] = useState(false);
  
  const handleDelete = (id) => {
    setShowDialog(true);
  };
  
  const handleDialogCancel = () => {
    setShowDialog(false)
  }
  
  const handleDialogRemove = (id) => {
    setTodos(todos.filter((obj) => obj.id !== id));
    setShowDialog(false)
  }
  
  return (
        <div className="todoListContainer">
        <h3>Task List</h3>
        <ul className="todo-list">
          {todos.length === 0 ? (
            <p className="text-center">No Tasks</p>
          ) : (
            todos.map((obj) => (
              <div key={obj.id}>
                <TodoItem obj={obj} setTodos={setTodos} onDelete={()=>handleDelete(obj.id)}/>
                {showDialog&&<Dialog onCancel={handleDialogCancel} onRemove={()=>{handleDialogRemove(obj.id)}}/>}
              </div>
            ))
          )}
        </ul>
      </div>
  )
}

export default TodoList;