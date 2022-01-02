import React, { Component } from 'react'

 class Admin extends Component {
     state={
         isVisible:true
     }
     onClickEvent=(e)=>{
         this.setState({
             isVisible:!this.state.isVisible
         })
     }
     alertFunc(){
         alert("Daha burası yazılmadı")
     }
    render() {
        const{claims,location}=this.props
        const{isVisible}=this.state
        return (
            <div>
               <div className='col-md-8 mb-4'>
                <div className='card'>
                    <div className='card-header d-flex justify-content-between'>
                    <h4 className='d-inline' onClick={this.onClickEvent}>{claims}</h4>
                    <i className="fas fa-trash" onClick={this.alertFunc}  style={{cursor:"pointer"}}></i>
                    </div>
                    {
                        isVisible?<div className="card-body">
                        <p className="card-text">Maaş: {location}</p>
                        <p className="card-text">Departman: {location}</p>
                    </div>:null
                    }
                    
                    
                </div>
            </div>
            
        
            </div>
        )
    }
}
export default Admin
