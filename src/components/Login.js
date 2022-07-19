import "../css/login.css";
import {Link, Redirect} from "react-router-dom";
import React, {useEffect, useState} from 'react';
import { useHistory } from "react-router-dom";
import { GoogleAuthProvider, signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../config/firebase'
import GoogleButton from "react-google-button";
import { signInWithPopup } from "firebase/auth";
import { async } from "@firebase/util";




const Login = () =>{
   
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState("");
    let history = useHistory(); 

    const access = (()=>{
        signInWithEmailAndPassword(auth, email, password).then(()=>{
            history.push("/home");
        }).catch(()=>{
            alert("Error Captured");
        })
       
    })

    const googleSignIn = (()=>{
        let GoogleAuthProvider = new GoogleAuthProvider();
        return signInWithPopup(auth,GoogleAuthProvider);
    })

    const handleGoogleSignIn = async (e) => {
        e.preventDefault();

        try{
             googleSignIn();
             history.push("/home");
        }catch(e){
            alert("Error Detected on Sign in with google")
        }
    }

   
    return(
        <div>
            <h1>Welcome</h1>
            <h3>Manage Your Task Checklist Easily</h3>
                <div className="inputs">
                    <h4>Email</h4>
                    <input type="email" placeholder="Enter your email" onChange={(e)=> setEmail(e.target.value)}/>

                    <h4>Password</h4>
                    <input type="password" placeholder="Enter your password" onChange={(e)=> setPassword(e.target.value)}/>
                </div>
            <button className="login" onClick={access}>Login</button><br></br>
            <p>Don't have an account? <Link to="/sign-up">Create one</Link></p>
            <h2>OR</h2>
            <GoogleButton type="light" style={{background:"white",marginLeft:"25rem"}} onClick={handleGoogleSignIn}>Sign in with google</GoogleButton>
            {/*<button className="btnGoogle">Sign in with Google</button>*/}
            
        </div>
    )
}

export default Login;