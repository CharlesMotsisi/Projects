function login(){
    return(
        <div>
            <h1>Welcome Back</h1>
            <h3>Manage Your Task Checklist Easily</h3>
            
            <h4>Email</h4>
            <input type="email" placeholder="Enter your email"/>

            <h4>Password</h4>
            <input type="password" placeholder="Enter your password"/>

            <button>Login</button><br></br>
            <h3>OR</h3>
            <button>Sign in with Google</button>
        </div>
    )
}

export default login;