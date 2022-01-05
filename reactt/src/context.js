import React, { Component } from 'react'

const UserContext=React.createContext();

const reducer=(state,action)=>{
  switch(action.type){
    case "DELETE_USER":
    return{
      ...state,
      users:state.users.filter(users=>action.payload!==users.id)
    }
    case "ADD_USER":
      return{
        ...state,
        users:[...state.users,action.payload]
      }
    default :
    return state
  }
}
export class UserProvider extends Component {
    state={
        users:[
            {
              id:"1",
              name:"Leo Xandre",
              salary:"8500",
              department:"Front End"
            },
            {
              id:"2",
              name:"Saian SS Miğfer",
              salary:"74000",
              department:"Rapper"
            },
            {
              id:"3",
              name:"Engin",
              salary:"8500",
              department:"Microsoft Developer"
            }
          ],                  

              dispatch:action=>{
                this.setState(state=>reducer(state,action))
              }
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