import React from 'react';
import Avatar from './Avatar';

//  ContactProps = {
//    avatarURL: String
//    status: Boolean
//    name: String
//    onClick: Function
// }
const Contact = ({ avatarURL, name, status, onClick }) => {
  return (
    <div className="Contact" onClick={onClick}>
      <Avatar src={avatarURL} alt={name} />
      <div className="Contact-name">{name}</div>
      <div className={`Contact-status-${status? "on": "off"}`}></div>
    </div>
  );
};

export default Contact;