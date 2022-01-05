import React, { Component } from 'react'
import UserConsumer from '../context'
import Admin from './Admin'
 class Admins extends Component {
    render() {
        return (
            <UserConsumer>
                {
                    value=>{
                        const{admins}=value
                        return(
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
            </UserConsumer>
            // <div>
            //     {
            //         admins.map(admin=>{
            //             return(
            //                 <Admin
            //                 key={admin.id}
            //                 claims={admin.claims}
            //                 location={admin.location}
            //                 />
            //             )
            //         })
            //     }
            // </div>
        )
    }
}
export default Admins