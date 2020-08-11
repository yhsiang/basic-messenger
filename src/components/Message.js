import React from 'react';

//  MessageProps = {
// }
const Message = ({ content, isSelf }) => {
  let className = "Message";
  if (isSelf) {
    className += " Message-self";
  }

  return (
    <div className={className}>{content}</div>
  );
};

export default Message;