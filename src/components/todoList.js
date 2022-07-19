import React, {useState} from "react";
import Home from "../components/home";
import Todo from "../components/todo"

function TodoList() {

    const [todos,setTodos] = useState([])

    const addTodo = (todo) =>{
        if(!todo.text || /^\s*$/.test(todo.text)){
            return
        }

        const  newTodos = [todo,...todos];
        setTodos(newTodos);
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
            <Home onSubmit={addTodo}/>
            <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo}/>
        </div>
    )
}

export default TodoList;