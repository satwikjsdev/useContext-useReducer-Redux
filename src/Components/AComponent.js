//this is where we hold the state

import React from 'react'
import { BComponent } from './BComponent'

export const UserDetails = React.createContext()
export const AComponent = () => {
    const initialState = {
        personName:'', 
        personAge:''
        }
    const reducer = (state, action) => {
        switch(action.type){
            case "EDIT_NAME":
                return {...state, personName:action.payload}
            case "EDIT_AGE":
                return {...state, personAge:action.payload}
            default:
                return state
        }
    }
    const [state,dispatch] = React.useReducer(reducer, initialState)
    const value={state,dispatch}
    console.log(value)
    return(
        <UserDetails.Provider value={value}>
            <div>
                <BComponent/>
            </div>
        </UserDetails.Provider>
    )
}