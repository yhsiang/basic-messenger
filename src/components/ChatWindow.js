import React from 'react';
import MessageList from './MessageList';
import MessageInput from './MessageInput';

import './ChatWindow.css';
//  ChatWindowProps = {
// }
const ChatWindow = ({ messages, chatTo, currentUser }) => {
  return (
    <div className="ChatWindow">
      <div className="ChatWindow-header">Chat with {chatTo.name}</div>
      <div className="ChatWindow-body">
        <MessageList messages={messages} currentUserId={currentUser.userId} />
      </div>
      <div className="ChatWindow-actions">
        <MessageInput />
      </div>
    </div>
  );
};

export default ChatWindow;