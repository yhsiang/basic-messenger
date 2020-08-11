import React from 'react';
import Avatar from './Avatar';

//  ContactProps = {
//    avatarURL: string
//    status: boolean
//    name: string
// }
const Contact = ({ avatarURL, name, status }) => {
  return (
    <div className="Contact">
      <Avatar src={avatarURL} alt={name} />
      <div className="Contact-name">{name}</div>
      <div className={`Contact-status-${status? "on": "off"}`}></div>
    </div>
  );
};

export default Contact;