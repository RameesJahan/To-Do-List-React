import React,{ useState } from "react";

import TodoItem from "./TodoItem";
import Dialog from "./Dialog";

const TodoList = ({todos,setTodos}) => {
  
  const [showDialog, setShowDialog] = useState(false);
  const [dltId, setDltId] = useState('');
  
  const handleDelete = (id) => {
    setDltId(id)
    setShowDialog(true);
  };
  
  const handleDialogCancel = () => {
    setShowDialog(false)
    setDltId("")
  }
  
  const handleDialogRemove = () => {
    setTodos((eTodos) => eTodos.filter((obj) => obj.id !== dltId));
    setShowDialog(false)
    setDltId("")
  }
  
  return (
        <div className="todoListContainer">
        <h3>Task List</h3>
        <ul className="todo-list">
          {todos.length === 0 ? (
            <p className="text-center">No Tasks</p>
          ) : (
            todos.map((obj) => (
                <TodoItem key={obj.id} obj={obj} setTodos={setTodos} onDelete={() => handleDelete(obj.id)}/>
            ))
          )}
        </ul>
        {showDialog&&(<Dialog onCancel={handleDialogCancel} onRemove={handleDialogRemove}/>)}
      </div>
  )
}

export default TodoList;