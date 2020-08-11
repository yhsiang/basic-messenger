import React from 'react';
import Contact from './Contact';

import './ContactList.css';

//  ContactListProps = {
//    contacts: [Contact]
//    changeContact: Function
//  }
const ContactList = ({ contacts, changeContact }) => {
  return (
    <div className="ContactList">
      <div className="ContactList-header">ContactList</div>
      <div className="ContactList-body">
        {contacts.map(({name, avatarURL, status, userId}) => (
        <Contact
          key={`${name}-${avatarURL}`}
          name={name}
          avatarURL={avatarURL}
          status={status}
          onClick={() => changeContact(userId)}
        />))}
      </div>
    </div>
  );
};

export default ContactList;