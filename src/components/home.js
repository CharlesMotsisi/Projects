import React, {useState} from 'react'
import image from '../components/pic.jpg';
import '../css/home.css'
function Home(){
    return(
        <div>
            <div className="Header">
                <h3>Charles Motsisi</h3>
                <img src={image} alt="Logo"/>
                <button className='logoutBtn'>Logout</button>
            </div>
            <div className="container">
                <input type="text" placeholder="Add New Task"/>

                <select>
                    <option>High</option>
                    <option>Medium</option>
                    <option>Low</option>
                </select>

                <button className='btnAdd'>Add</button>
            </div>
        </div>
    )
}

export default Home;