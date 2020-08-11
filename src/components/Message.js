import React, {useContext} from 'react';
import Avatar from './Avatar';
import ContactContext from '../contexts/ContactContext';

//  MessageProps = {
// }
const Message = ({ content, isSelf, userId }) => {
  const contactMap = useContext(ContactContext);
  let className = "Message";
  let avatar  = null;
  if (isSelf) {
    className += " Message-self";
  } else {
    let {avatarURL, name} = contactMap[userId];
    avatar = <Avatar src={avatarURL} alt={name} />;
  }

  return (
    <div className={className}>
      {avatar}
      <div className="Message-text">{content}</div>
    </div>
  );
};

export default Message;