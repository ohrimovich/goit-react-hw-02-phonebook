import React from "react";
import PropTypes from "prop-types";
import s from './ContactList.module.scss'


function ContactList({contacts, deleteContact}) {
    return (
        <ul className={s.list}>
            {contacts.map(contact => <li className={s.item} key={contact.id}><span className={s.name}>{contact.name}</span>:<span className={s.number}>{contact.number}</span> 
            <button className={s.button} type='button' onClick={() => deleteContact(contact.id)}>Delete</button></li>)}
        </ul>
    )
}

ContactList.propTypes = {
    contacts: PropTypes.array.isRequired,
    deleteContact: PropTypes.func.isRequired
}

export default ContactList;