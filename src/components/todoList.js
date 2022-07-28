import React, {useState} from "react";
import Home from "../components/home";
import Todo from "../components/todo"

function TodoList() {

    const [todos,setTodos] = useState([])
    const [prio,setPrio] = useState('');

    const addTodo = (todo) =>{
        console.log(todo)
        if(!todo.text || /^\s*$/.test(todo.text)){
            return;
        }

        const  newTodos = [todo,...todos];
        
        
        setTodos(newTodos);
       
    }
    
    const addPriority = () =>{
        
        const newPrio = prio;
        setPrio(newPrio);

        console.log(newPrio);
    }

    const updateTodo = (todoId, newValue) =>{
        if(!newValue.text || /^\s*$/.test(newValue.text)){
            return;
        }

        setTodos(prev=>prev.map(item=> (item.id===todoId ? newValue:item)));
    }

    const removeTodo = (id) =>{
        const removeArr = [...todos].filter(todo=>todo.id !== id)
        setTodos(removeArr);
    }

    const completeTodo = (id) =>{
        let updatedTodos = todos.map(todo=>{
            if(todo.id===id){
                todo.isComplete = !todo.isComplete
            }
            return todo;
        })
        setTodos(updatedTodos);
    }
    
    return (
        <div>
            <Home onSubmit={addTodo} addPriority={addPriority}/>
            
            <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} 
              updateTodo = {updateTodo} prio={prio}/>
        </div>
    )
}

export default TodoList;