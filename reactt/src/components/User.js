import React, { Component } from 'react'
import PropTypes from 'prop-types'

 class User extends Component {

    // constructor(props){
    //     super(props)
    //     this.onClickEvent=this.onClickEvent.bind(this)
    //  }
    
    
     state={
         isVisible:true
     }          
     onClickEvent=(e)=>{
        this.setState({
            isVisible:!this.state.isVisible
        })
     }   
     
    render() { 
        const{name,salary,department}=this.props;
        const{isVisible}=this.state;

        return (
            <div className='col-md-8 mb-4'>
                <div className='card'>
                    <div className='card-header d-flex justify-content-between'>
                    <h4 className='d-inline' onClick={this.onClickEvent}>{name}</h4>
                    <i className="fas fa-trash"  style={{cursor:"pointer"}}></i>
                    </div>
                    {
                        isVisible ? <div className="card-body">
                        <p className="card-text">Maaş: {salary}</p>
                        <p className="card-text">Departman: {department}</p>
                    </div> : null
                    }
                    
                </div>
            </div>
        )
    }
}
User.propTypes={
    name:PropTypes.string.isRequired,
    salary:PropTypes.number.isRequired,
    department:PropTypes.string.isRequired
}
User.defaultProps={
    name:"No Data",
    salary:"No Data",
    department:"No Data"
}
export default User