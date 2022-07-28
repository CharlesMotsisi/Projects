import React, {useState} from 'react'
import Home from "../components/home";
import TodoList from './todoList';
import {RiCloseCircleLine} from 'react-icons/ri'
import {TiEdit} from 'react-icons/ti'
import '../css/todo.css'
import {handleChangePrio} from './home';



function Todo({todos,completeTodo,removeTodo,props}) {
    const [edit, setEdit] = useState({
        id:null,
        value: ''
    })
    // const [prio,setPrio] = useState(<Home value={()=>props.handleChangePrio()}/>); 

    /*const submitPrio = (val) =>{
            <Home val={()=> props.handleChangePrio()}/>
    }

    /*const submitUpdate = value =>{
        updateTodo(edit.id,value)
        setEdit({
            id: null,
            value: ''
        })
    }

    if (edit.id){
        return <Home edit={edit} onSubmit = {submitUpdate}></Home>
    }*/

            return todos.map((todo,index)=>(
                <div className='display'>
                    {todo.priority === "High" ? (
                    <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
                    key={index}>
                        <div key={todo.id} onClick={()=>completeTodo(todo.id)} className="text">
                        {todo.text}  
                         
                        </div>
                    
                        <div className='icons'>
                            <button onClick={()=> removeTodo(todo.id)}
                            className='delete-icon'>Complete</button>
                            
                            <div className='High'></div>
                            {/*<TiEdit onClick={()=>setEdit({id: todo.id,value:todo.text})}
                            className='edit-icon'/>*/}
        
                        </div>
                            
                    </div>): todo.priority === "Medium" ? (
                    <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
                    key={index}>
                        <div key={todo.id} onClick={()=>completeTodo(todo.id)} className="text">
                        {todo.text}  
                         
                        </div>
                    
                        <div className='icons'>
                            <button onClick={()=> removeTodo(todo.id)}
                            className='delete-icon'>Complete</button>
                            
                            <div className='Medium'></div>
                            {/*<TiEdit onClick={()=>setEdit({id: todo.id,value:todo.text})}
                            className='edit-icon'/>*/}
        
                        </div>
                            
                    </div>):(<div className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
                    key={index}>
                        <div key={todo.id} onClick={()=>completeTodo(todo.id)} className="text">
                        {todo.text}  
                         
                        </div>
                    
                        <div className='icons'>
                            <button onClick={()=> removeTodo(todo.id)}
                            className='delete-icon'>Complete</button>
                            
                            <div className='Low'></div>
                            {/*<TiEdit onClick={()=>setEdit({id: todo.id,value:todo.text})}
                            className='edit-icon'/>*/}
        
                        </div>
                            
                    </div>)}
                    
                    
                    
                </div>
            )) 
       
        
    
    
    
    
}

export default Todo;