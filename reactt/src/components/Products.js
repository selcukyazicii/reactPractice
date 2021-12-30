import React, { Component } from 'react'
import PropTypes from 'prop-types'
class Products extends Component {
    state={
        isVisiblee:true
    }
    onClickEventt=(e)=>{
        this.setState({
            isVisiblee:!this.state.isVisiblee
        })
    }
        
    render() {
        
        const{skt,hammadde,owner}=this.props
        const{isVisiblee}=this.state
        return (
            <div className='col-md-8 mb-4'>
            <div className='card'>
                <div className='card-header d-flex justify-content-between'>
                <h4 className='d-inline' onClick={this.onClickEventt}>{owner}</h4>
                {/* <button className='btn btn-primary' onClick={this.onClickEventt}></button> */}
                <i className="fas fa-trash"  style={{cursor:"pointer"}}></i>
                </div>
                {
                    isVisiblee ? <div className="card-body">
                    <p className="card-text">Maaş: {skt}</p>
                    <p className="card-text">Departman: {hammadde}</p>
                </div> : null
                }
                
            </div>
        </div>
        )
    }
}
Products.propTypes={
    skt:PropTypes.string.isRequired,
    hammadde:PropTypes.string.isRequired
}
Products.defaultProps={
    skt:"No Data",
    hammadde:"No Data"
}
export default Products