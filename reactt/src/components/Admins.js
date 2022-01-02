import React, { Component } from 'react'
import Admin from './Admin'
 class Admins extends Component {
    render() {
        const{admins}=this.props
        return (
            <div>
                {
                    admins.map(admin=>{
                        return(
                            <Admin
                            key={admin.id}
                            claims={admin.claims}
                            location={admin.location}
                            />
                        )
                    })
                }
            </div>
        )
    }
}
export default Admins