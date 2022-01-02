// import './App.css';
import React,{Component} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Users from './components/Users';
class App extends Component{
  render(){
    return(
      <div className='container'>
        <Navbar title="There're Navbar Components"/>
        <hr/>
        <Users />
      </div>
    )
  }
}
export default App;
