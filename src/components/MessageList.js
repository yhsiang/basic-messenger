import React from 'react';
import Message from './Message';

//  MessageListProps = {
//   messages: [MessageProps]
//   currentUserId: Number(int)
// }
const MessageList = ({ messages, currentUserId }) => {
  return (
    <div className="MessageList">
      {messages.map(({content, userId}) => (
        <Message
          key={`${content}+${userId}`}
          content={content}
          isSelf={userId===currentUserId} userId={userId}
        />
      ))}
    </div>
  );
};

export default MessageList;