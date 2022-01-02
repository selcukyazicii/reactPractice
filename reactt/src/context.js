import React, { Component } from 'react'
import User from './components/User';

const UserContext=React.createContext();

export class UserProvider extends Component {
    state={
        users:[
            {
              id:1,
              name:"Leo Xandre",
              salary:"8500",
              department:"Front End"
            },
            {
              id:2,
              name:"Saian SS Miğfer",
              salary:"74000",
              department:"Rapper"
            },
            {
              id:3,
              name:"Engin",
              salary:"8500",
              department:"Microsoft Developer"
            }
          ],
          admins:[
                {
                  id:1,
                  claims:"Admin",
                  location:"Izmit"
                }
              ]
    }
    render() {
        return (
            <div>
                <UserContext.Provider value={this.state}>
                    {this.props.children}
                </UserContext.Provider>
            </div>
        )
    }
}
const UserConsumer=UserContext.Consumer;
export default UserConsumer