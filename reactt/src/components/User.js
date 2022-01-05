import React, { Component } from 'react'
import PropTypes from 'prop-types'
import UserConsumer from '../context'
import posed from 'react-pose'

const Animation=posed.div({
    visible: { opacity: 1 },
    hidden: { opacity: 0 }
  })
 class User extends Component {
     state={
         isVisible:true,
         isVisibility:true         
     }
    changeVisibility=(e)=>{
        this.setState({
            isVisibility:!this.state.isVisibility
        })
    } 

     onClickEvent=(e)=>{
        this.setState({
            isVisible:!this.state.isVisible
        })
     }

     onDeleteUser=(dispatch,e)=>{
        const {id}=this.props;
        dispatch({type:"DELETE_USER",payload:id})
     }   
    
    render() { 
        const{name,salary,department}=this.props;
        const{isVisible}=this.state;
        const{isVisibility}=this.state
        return(
            <UserConsumer>
                {
                    value=>{
                        const{dispatch}=value;
                        return (
                            <div className='col-md-8 mb-4'>
                                <h4 className='d-inline' onClick={this.changeVisibility}>{name}</h4>
                                 <Animation pose={isVisibility?"visible":"hidden"}>
                                 <div className='card' style={isVisibility?{backgroundColor:"#4d5d53" ,color:"white"}:null}>
                                    <div className='card-header d-flex justify-content-between'>                                   
                                    <h4 className='d-inline' onClick={this.changeVisibility}>{name}</h4>
                                    <i  className="fas fa-trash" onClick={this.onDeleteUser.bind(this,dispatch)} style={{cursor:"pointer"}}></i>                                   
                                    </div>
                                    
                                        <div className="card-body">
                                        <p className="card-text">Maaş: {salary}</p>
                                        <p className="card-text">Departman: {department}</p>                                        
                                    </div>                                     
                                </div>
                                </Animation>
                            </div>                            
                        )
                    }
                }               
            </UserConsumer>
        )       
    }
}
User.propTypes={
    name:PropTypes.string.isRequired,
    salary:PropTypes.string.isRequired,
    department:PropTypes.string.isRequired
}
User.defaultProps={
    name:"No Data",
    salary:"No Data",
    department:"No Data"
}
export default User