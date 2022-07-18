import React, {useState} from 'react'
import image from '../components/pic.jpg';
import '../css/home.css'
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
    return(
        <div>
            <div className="Header">
                <h3>Charles Motsisi</h3>
                <img src={image} alt="Logo"/>
                <button className='logoutBtn'>Logout</button>
            </div>
            <div className="container">
                <input type="text" placeholder="Add New Task" onChange={(e)=> setTask(e.target.value)}/>

                <select onChange={(e)=> setPriority(e.target.value)}>
                    <option>High</option>
                    <option>Medium</option>
                    <option>Low</option>
                </select>

                <button className='btnAdd' onClick={taskToDo}>Add</button>
            </div>
        </div>
    )
}

export default Home;