import "../css/login.css";
import {Link, Redirect} from "react-router-dom";
import React, {useEffect, useState} from 'react';
import { useHistory } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../config/firebase'
import GoogleButton from "react-google-button";
import { async } from "@firebase/util";
import { getAuth, signInWithPopup,GoogleAuthProvider } from "firebase/auth";




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

    const provider = new GoogleAuthProvider();

    const handleGoogleSignIn = () =>{
        const auth = getAuth();

        signInWithPopup(auth,provider).then(result=>{
            const user = result.user;
            history.push("/home");
        })
    }

    

   
    return(
        <div>
            <h1>Welcome</h1>
            <h3>Manage Your Task Checklist Easily</h3>
                <div className="inputs">
                    
                    <input type="email" placeholder="Enter your email" onChange={(e)=> setEmail(e.target.value)}/>

                    
                    <input type="password" placeholder="Enter your password" onChange={(e)=> setPassword(e.target.value)}/>
                </div>
            <button className="login" onClick={access}>Login</button><br></br>
            <div className="para">
                <p> Don't have an account? <Link to="/sign-up">Create one</Link></p>
                <h2>OR</h2>
            </div>
            <GoogleButton className="google-btn" type="light" style={{background:"white",marginLeft:"43vw", marginTop:"2vh"}} onClick={handleGoogleSignIn}>Sign in with google</GoogleButton>
            {/*<button className="btnGoogle">Sign in with Google</button>*/}
            
        </div>
    )
}

export default Login;