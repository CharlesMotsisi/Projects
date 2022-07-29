import React, {useState} from 'react'
import TodoList from './todoList';
import '../css/todo.css'
import {db} from '../config/firebase'
import {addDoc,collection} from 'firebase/firestore'



function Todo({todos,completeTodo,removeTodo}) {
    const [edit, setEdit] = useState({
        id:null,
        value: ''
    })

   
    
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
                           
        
                        </div>
                            
                    </div>)}
                    
                    
                    
                </div>
            )) 
       
        
    
    
    
    
}

export default Todo;