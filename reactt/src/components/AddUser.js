import React, { Component } from 'react'
import posed from 'react-pose';

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
     changeName=(e)=>{
         this.setState({
             name:e.target.value
         })
     }
     changeDepartment=(e)=>{
         this.setState({
             department:e.target.value
         })
        }

     changeSalary=(e)=>{
         this.setState({
             salary:e.target.value
         })
     }
     changeInput=(e)=>{
         this.setState({
             [e.target.name]:e.target.value
         })
     }
     
    render() {
        const{visible,name,salary,department}=this.state
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
                            <form>
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
                                    <input type="text" name='salary'id='salary'value={salary} placeholder='Enter Salary'className='form-control' onChange={this.changeInput}></input>
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
export default AddUser