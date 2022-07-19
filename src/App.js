import React, {useState} from 'react'
import logo from './logo.svg';
import './App.css';
import Home from "./components/home";
import Login from "./components/Login";
import Signup from "./components/signup";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import TodoList from './components/todoList';

function App() {
  /*const [list,setList] = useState([]);
  
  const addList = ((task,priority)=>{
    setList((list) => [...list, {
        task:task,
        priority:priority
    }])
    console.log(list);
  })*/
  
  return (
    <div className="App">

      <Router>
        <Switch>
          <Route exact path="/" component={Login}></Route>
          <Route path="/sign-up" component={Signup}></Route>
          <Route path="/home">
            <TodoList /*list={list} add={addList}*//>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
