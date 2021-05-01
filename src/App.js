import './App.css';
import React,{ Component } from 'react';
import ReactDom from "react-dom";

class App extends Component{
  var mosters=fetch('https://jsonplaceholder.typicode.com/users').then(response=>response.json());
  render(){
    return (<h1>mosters.user</h1>);
  }
}

export default App;
