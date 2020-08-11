import React from 'react';
import Message from './Message';

//  MessageListProps = {
//   messages: [MessageProps]
// }
const MessageList = ({ messages, currentUserId }) => {
  return (
    <div className="MessageList">
      {messages.map(({content, userId}) => (
        <Message content={content} isSelf={userId===currentUserId} userId={userId} />
      ))}
    </div>
  );
};

export default MessageList;