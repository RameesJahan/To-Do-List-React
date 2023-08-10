import React,{ useState } from "react";

const TodoItem = ({obj,setTodos,onDelete}) => {
  const [eTodo, setETodo] = useState("");
  
  const handleDone = id => {
    setTodos((eTodos) => eTodos.map((obj) => {
        if (obj.id === id) {
          return{
            ...obj,
            done : !obj.done
          }
        }
        return obj;
      })
    );
  };
  
  const handleEdit = (id) => {
    setTodos((eTodos) => eTodos.map((obj) => {
          if (obj.id === id) {
            setETodo(obj.todo);
            return {
              ...obj,
              isEdit:true
            }
          }
          return obj;
        })
      );
    
  }
  
  const handleSave = (id,data) => {
    if(data){
        setTodos((eTodos) => eTodos.map((obj) => {
          if (obj.id === id) {
            return {
              ...obj,
              isEdit:false,
              todo:data
            }
          }
          return obj;
        })
      );
    }
  }
  
  const handleCancel = (id) => {
    setTodos((eTodos) => eTodos.map((obj) => {
        if (obj.id === id) {
          return{
           ...obj, 
           isEdit: false
          }
        }
        return obj;
      })
    );
  }
  
  return (
           <li done={obj.done.toString()}>
                {obj.isEdit?(
                  <>
                    <input 
                      autoFocus
                      type="text" 
                      onChange={(e) => setETodo(e.target.value)}
                      value={eTodo} 
                    />
                    <i onClick={() => handleSave(obj.id,eTodo)} 
                       className="fa fa-floppy-disk"
                    ></i>
                    <i onClick={() => handleCancel(obj.id)} 
                       className="fa fa-xmark"
                    ></i>
                  </>
                  ):(
                  <>
                    <i className="fa fa-check"></i>
                    <p onClick={() => handleDone(obj.id)}>{obj.todo}</p>
                    <i onClick={() => handleEdit(obj.id)}
                       className="fa fa-pen"
                    ></i>
                    <i onClick={onDelete}
                       className="fa fa-trash"
                    ></i>
                  </>
                  )
                }
              </li>
  )
}

export default TodoItem;