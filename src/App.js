
import logo from './logo.svg';
import './App.css';
import Home from "./components/home";
import login from "./components/Login";
import Signup from "./components/signup";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  
  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;
