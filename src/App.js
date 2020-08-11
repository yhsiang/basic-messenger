import React from 'react';
import ContactList from './components/ContactList';
import ChatWindow from './components/ChatWindow';
import ContactContext, { contactMap, currentUser } from './contexts/ContactContext';
import './App.css';

const messages = [
  {content: "oh bad!", userId: 123},
  {content: "write code", userId: 1},
  {content: "any plan today", userId: 123},
  {content: "cool nice", userId: 123},
  {content: "it's great day", userId: 1},
  {content: "hello how's going", userId: 123},
];

function App() {
  const contacts = Object.values(contactMap);
  const chatToId = 123;

  return (
    <ContactContext.Provider value={contactMap}>
      <div className="App">
        <ContactList contacts={contacts} />
        <ChatWindow messages={messages} chatTo={contactMap[chatToId]} currentUserId={currentUser.userId} />
      </div>
    </ContactContext.Provider>
  );
}

export default App;
