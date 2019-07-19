import React from 'react'
import {connect} from 'react-redux'
import { postContact } from './Actions.js/contactActions';



const App = props => {
    let {dispatch, contacts} = props
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        let {contact_name, phone_no} = e.target
        let body = {
            name: contact_name.value,
            phone: phone_no.value
        }
        e.target.reset()

        // dispatching the actions from view
        
        dispatch(postContact(body))
        // dispatch({type: 'POST_CONTACT', payload: body})
        
    }

    console.log(props.contacts)
    return(
        <>
            {/* post contact */}
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input type="text" name="contact_name" required/><br/>
                <label>Phone</label>
                <input type="text" name="phone_no" required/><br/>
                <button type="submit">SAVE IT</button>
            </form>

            {/* show contacts */}
            <h1>Contacts</h1>
            <ul>
                {
                    contacts.map((contact, i) => {
                        return(
                            <li key={i}>{contact.name} - {contact.phone}</li>
                        )
                    })
                }
            </ul>
        </>
    )
}

const mapStateToProps = state => {
    return {
        contacts: state.contacts
    }
}

export default connect(mapStateToProps)(App)