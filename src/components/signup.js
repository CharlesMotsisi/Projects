import "../css/signUp.css"
import {Link} from "react-router-dom"
import React, {useEffect, useState} from 'react';
import { useHistory } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from '../config/firebase'
import { GoogleAuthProvider } from "firebase/auth";
import GoogleButton from "react-google-button";



function Signup(){

    //const [name, setName] = useState('');
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const provider = new GoogleAuthProvider();
    let history = useHistory();
    

    const access = (()=>{
       createUserWithEmailAndPassword(auth, email, password).then(()=>{
            history.push("/");
            alert("Successfuly Added");
        }).catch(()=>{
            alert("Error Captured!!");
        })

    })


    return(
        <div>
            <h1>Welcome Back</h1>
            <h3>Manage Your Task Checklist Easily</h3>
            
                 <div className="inputs">
                    {/*<h4>Full Name</h4>
                    <input type="text" placeholder="Enter your name" onChange={(e)=> setName(e.target.value)}/>*/}
                    <h4>Email</h4>
                    <input type="email" placeholder="Enter your email"  onChange={(e)=> setEmail(e.target.value)}/>

                    <h4>Password</h4>
                    <input type="password" placeholder="Enter your password"  onChange={(e)=> setPassword(e.target.value)}/>
                </div>

            <button className="login" onClick={access}>Create Account</button><br></br>
            <p>Already have an account? <Link to="/">Login</Link></p>
            <h2>OR</h2>
            <GoogleButton type="light" style={{background:"white",marginLeft:"45rem"}}>Sign in with google</GoogleButton>
            {/*<button className="btnGoogle">Sign in with Google</button>*/}
        </div>
    )
}

export default Signup;