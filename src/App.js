import React, {useState} from 'react';
import ContactList from './components/ContactList';
import ChatWindow from './components/ChatWindow';
import ContactContext, { contactMap, currentUser } from './contexts/ContactContext';
import MessageContext, { defaultMessages, defaultChatToId } from './contexts/MessageContext';
import './App.css';

function App() {
  const [messageMap, pushMessage] = useState(defaultMessages);
  const [chatToId, setChatToId] = useState(defaultChatToId);
  const contacts = Object.values(contactMap);

  const addMessage = message => pushMessage((oldMessages) => {
    const chatToMessages = oldMessages[chatToId];
    return { ...oldMessages, [chatToId]: [message, ...chatToMessages] };
  });
  const changeContact = userId => setChatToId(userId);

  return (
    <ContactContext.Provider value={contactMap}>
      <div className="App">
        <ContactList contacts={contacts} changeContact={changeContact} />
        <MessageContext.Provider value={{ messageMap, addMessage, chatToId }}>
          <ChatWindow
            chatTo={contactMap[chatToId]}
            currentUserId={currentUser.userId}
          />
        </MessageContext.Provider>
      </div>
    </ContactContext.Provider>
  );
}

export default App;
