import React from 'react'
import { editAgeAction } from '../Actions/editAgeAction'
import { editNameAction } from '../Actions/editNameAction'
import { UserDetails } from './AComponent'

export const CComponent = () => {
    const ourUserContext = React.useContext(UserDetails)
    const [personDetails, setPersonDetails] = React.useState({name:'', age:''})
    const handleNameChange = (event) => {
        setPersonDetails({...personDetails, name:event.target.value})
    }
    const handleAgeChange = (event) => {
        setPersonDetails({...personDetails, age:event.target.value})
    }
    const handleSubmit = event => {
        ourUserContext.dispatch(editAgeAction(personDetails.age))
        ourUserContext.dispatch(editNameAction(personDetails.name))
        event.preventDefault()
    }
    return(
        <div>
            <h1>
                {ourUserContext.state.personName}
                <br/>
                {ourUserContext.state.personAge}
            </h1>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='enter name' value={personDetails.name} onChange={handleNameChange}/>
                <input type='text' placeholder='enter age' value={personDetails.age} onChange={handleAgeChange}/>
                <input type='submit' value='submit'/>
            </form>
        </div>
    )
}