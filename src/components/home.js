import React, {useState, useEffect, useRef} from 'react'
import image from '../components/pic.jpg';
import '../css/home.css'
import { useHistory } from "react-router-dom";
import Todo from './todo'
import {collection, getDocs,addDoc} from 'firebase/firestore'
import {db} from '../config/firebase'
import {Redirect} from 'react-router-dom'

function Home(props){
    const [task, setTask] = useState("");
    const [priority, setPriority] = useState("High");

    const focus = useRef(null);
    

    useEffect(()=>{
        focus.current.focus();
    })
    /*const taskToDo = (()=>{
        const theTasks = {
            task:task,
            priority:priority
        }

        props.taskToDo(task,priority);
    })*/

    let history = useHistory();

    const out = (()=>{
        history.push("/");
    })

    const handleChange = (e) =>{
        setTask(e.target.value);
        
    }

    const handleChangePrio = (e) =>{
    
        setPriority(e.target.value);
        
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
       
        const collectionRef = collection(db,"tasks");
        props.onSubmit({
            id: Math.floor(Math.random()*10000),
            text: task,
            priority: priority
        })
        setTask('');
        setPriority('');

        addDoc(collectionRef,{task,priority}).then(()=>{
            alert("Successfully Added Task");
        }).catch(()=>{
            alert("Error adding task and priority");
        });
        
        
    }
    return(
        <div>
            <div className="Header">
                <h3>Charles Motsisi</h3>
                <img src={image} alt="Logo"/>
                <button className='logoutBtn' onClick={out}>Logout</button>
            </div>
                <div className="container" onSubmit={handleSubmit}>
                <input type="text" placeholder="Add New Task" value={task}
                  onChange={handleChange} ref={focus}/*onChange={(e)=> setTask(e.target.value)}*//>
                <select onChange={handleChangePrio} value={priority}>
                    <option value={"High"}>High</option>
                    <option value={"Medium"}>Medium</option>
                    <option value={"Low"}>Low</option>
                    
                </select>

                <button className='btnAdd' onClick={handleSubmit}>Add</button>
                
            </div>
            
        </div>
        
    )
}

export default Home;