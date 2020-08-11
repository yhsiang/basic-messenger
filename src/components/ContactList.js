import React from 'react';
import Contact from './Contact';

import './ContactList.css';

//  ContactListProps = {
//    contacts: [ContactProps]
//  }
const ContactList = ({ contacts }) => {
  return (
    <div className="ContactList">
      <div className="ContactList-header">ContactList</div>
      <div className="ContactList-body">
        {contacts.map(({name, avatarURL, status}) => (
        <Contact
          name={name}
          avatarURL={avatarURL}
          status={status}
        />))}
      </div>
    </div>
  );
};

export default ContactList;