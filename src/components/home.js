import React, {useState} from 'react'
import image from '../components/pic.jpg';
import '../css/home.css'
import { useHistory } from "react-router-dom";

function Home(props){
    const [task, setTask] = useState("");
    const [priority, setPriority] = useState("");

    const taskToDo = (()=>{
        const theTasks = {
            task:task,
            priority:priority
        }

        props.taskToDo(task,priority);
    })

    let history = useHistory();

    const out = (()=>{
        history.push("/");
    })

    const handleChange = (e) =>{
        setTask(e.target.value);
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        props.onSubmit({
            id: Math.floor(Math.random()*10000),
            text: task
        })
        setTask('');
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
                  onChange={handleChange} /*onChange={(e)=> setTask(e.target.value)}*//>

                <select onChange={(e)=> setPriority(e.target.value)}>
                    <option>High</option>
                    <option>Medium</option>
                    <option>Low</option>
                </select>

                <button className='btnAdd' onClick={handleSubmit}>Add</button>
            </div>
        </div>
    )
}

export default Home;