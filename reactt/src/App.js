// import './App.css';
import React,{Component} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Users from './components/Users';
import AddUser from './components/AddUser';
class App extends Component{
  render(){
    return(
      <div className='container'>
        <Navbar title="There're Navbar Components"/>
        <hr/>
        <AddUser/>
        <Users />
        {/* <Admins/> */}
      </div>
    )
  }
}
export default App;
