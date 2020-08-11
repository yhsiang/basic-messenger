import React, {useState} from 'react';
import ContactList from './components/ContactList';
import ChatWindow from './components/ChatWindow';
import ContactContext, { contactMap, currentUser } from './contexts/ContactContext';
import MessageContext, { defaultMessages } from './contexts/MessageContext';
import './App.css';

function App() {
  const [messages, pushMessage]= useState(defaultMessages);
  const contacts = Object.values(contactMap);
  const chatToId = 123;

  const addMessage = (message) => {
    console.log(message);
    pushMessage(messages => [message, ...messages])
  };

  return (
    <ContactContext.Provider value={contactMap}>
      <div className="App">
        <ContactList contacts={contacts} />
        <MessageContext.Provider value={{ messages, addMessage }}>
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
