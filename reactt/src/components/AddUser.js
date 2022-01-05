import React, { Component } from 'react'
import posed from 'react-pose';
import UserConsumer from '../context'
var uniqid = require('uniqid'); 

const Animation=posed.div({
    visible: { opacity: 1 ,applyAtStart:{
        display:"block"
    }},
    hidden: { opacity: 0 ,applyAtEnd:{
        display:"none"
    }}
  })
 class AddUser extends Component {
     state={
         visible:true,
         name:"",
         salary:"",
         department:""
     }  
     changeVisibility=(e)=>{
         this.setState({
             visible:!this.state.visible
         })
     }     
     changeInput=(e)=>{
         this.setState({
             [e.target.name]:e.target.value
         })
     }
     addUser=(dispatch,e)=>{
        e.preventDefault();
        const{name,salary,department}=this.state
        const newUser={
            id:uniqid(),
            name,
            salary,
            department
        }
        dispatch({type:"ADD_USER",payload:newUser})
     }
    render() {
        const{visible,name,salary,department}=this.state
        return <UserConsumer>
            {
                value=>{
                    const{dispatch}=value
                    return (           
                        <div>
                                <div className='col-md-8 mb-4'>
                                    <button onClick={this.changeVisibility} type='submit' className='btn btn-dark btn-block mb-2'>{visible ? "Hide Form" : "Show  User Add Form"}</button>
                                    <Animation pose={visible ? "visible" : "hidden"}>
                                <div className='card'>                                                                      
                                    <div className='card-header'>
                                        <h4>Add User Form</h4>
                                    </div>
                                    <div className='card-body'>
                                        <form onSubmit={this.addUser.bind(this,dispatch)}>
                                            <div className='form-group'>
                                                <label htmlFor='name'>Name: </label>
                                                <input type="text" name='name'id='id' placeholder='Enter Name'className='form-control' value={name} onChange={this.changeInput}></input>
                                            </div>
                                            <div className='form-group'>
                                                <label htmlFor='department'>Department: </label>
                                                <input type="text" name='department'id='department' value={department} placeholder='Enter Department'className='form-control' onChange={this.changeInput}></input>
                                            </div>
                                            <div className='form-group'>
                                                <label htmlFor='salary'>Salary: </label>
                                                <input type="number" name='salary'id='salary'value={salary} placeholder='Enter Salary'className='form-control' onChange={this.changeInput} step={500}></input>
                                            </div>
                                            <button type='submit' className="btn btn-danger btn-block">Save</button>
                                        </form>
                                    </div>
                                </div>
                                </Animation>
                            </div>              
                        </div>
                    )
                }
            }
        </UserConsumer>



        
    }
}
export default AddUser