import React, {useContext} from 'react';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import MessageContext from '../contexts/MessageContext';

import './ChatWindow.css';
//  ChatWindowProps = {
// }
const ChatWindow = ({ chatTo, currentUserId }) => {
  const {messages, addMessage} = useContext(MessageContext);
  return (
    <div className="ChatWindow">
      <div className="ChatWindow-header">Chat with {chatTo.name}</div>
      <div className="ChatWindow-body">
        <MessageList messages={messages} currentUserId={currentUserId} />
      </div>
      <div className="ChatWindow-actions">
        <MessageInput addMessage={addMessage} currentUserId={currentUserId} />
      </div>
    </div>
  );
};

export default ChatWindow;