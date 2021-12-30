// import './App.css';
import React,{Component} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import User from './components/User';

class App extends Component{
  render(){
    return(
      <div className='container'>
        <Navbar title="There're Navbar Components"/>
        <hr/>
        <User
        name="Selo"
        salary="9800"
        department="backend"
        />

        <User
        name="Melo"
        salary="1500"
        department="frontend"
        />        
      </div>
    )
  }
}
export default App;
