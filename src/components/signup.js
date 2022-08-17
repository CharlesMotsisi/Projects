import "../css/signUp.css"
import {Link} from "react-router-dom"
import React, {useEffect, useState} from 'react';
import { useHistory } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from '../config/firebase'
import { getAuth, signInWithPopup,GoogleAuthProvider } from "firebase/auth";
import GoogleButton from "react-google-button";



function Signup(){

    const [name, setName] = useState('');
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    

    const provider = new GoogleAuthProvider();
    let history = useHistory();
    
    const handleGoogleSignIn = () =>{
        const auth = getAuth();

        signInWithPopup(auth,provider).then(result=>{
            const user = result.user;
            history.push("/home");
        })
    }

    const access = (()=>{
        if(name === email){
            return;
        }else{
            createUserWithEmailAndPassword(auth, email, password).then(()=>{
                history.push("/");
                alert("Successfuly Added");
            }).catch(()=>{
                alert("Fill all the fields");
            })
        }
       

    })
    
    

    return(
        
        <div>
            
            <h1>Welcome Back</h1>
            <h3>Manage Your Task Checklist Easily</h3>
            
                 <div className="inputs">
                    
                    <input type="text" placeholder="Enter your name" onChange={(e)=> setName(e.target.value)}/>
                    
                    <input type="email" placeholder="Enter your email"  onChange={(e)=> setEmail(e.target.value)}/>

                
                    <input type="password" placeholder="Enter your password"  onChange={(e)=> setPassword(e.target.value)}/>
                </div>

            <button className="login" onClick={access}>Create Account</button><br></br>

            <div className="para">
                <p>Already have an account? <Link to="/">Login</Link></p>
                <h2>OR</h2>
            </div>
            
            <GoogleButton className="google-btn" type="light" style={{background:"white",marginLeft:"43vw", marginTop:"2vh"}} onClick={handleGoogleSignIn}>Sign in with google</GoogleButton>
            {/*<button className="btnGoogle">Sign in with Google</button>*/}
        </div>
    )
}

export default Signup;