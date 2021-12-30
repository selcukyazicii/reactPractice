// import './App.css';
import React,{Component} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import User from './components/User';
import Products from './components/Products';
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
        <Products
        skt="9 Nisan"
        hammadde="plastik"
        owner="hamdi bey"
        />
        <br></br>
        <Products
        skt="18 haziran"
        hammadde="sentetik"
        owner="mehmet bey"
        />
      </div>
    )
  }
}
export default App;
