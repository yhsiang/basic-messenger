import React from 'react';
import ContactList from './components/ContactList';
import './App.css';
import ChatWindow from './components/ChatWindow';

const currentUser = {
  userId: 1,
  avatarURL: "https://gravatar.com/avatar/6ad59bb2415618eeed4a1c841895e5f9?s=200&d=monsterid&r=pg",
  name: "Ly Cheng",
  status: true,
}

const contactMap = {
  123: {
    avatarURL: "https://gravatar.com/avatar/76f75d5b2c6839cc6ab4a593c1d90149?s=200&d=monsterid&r=pg",
    name: "Foo One",
    status: true,
  },
  456: {
    avatarURL: "https://gravatar.com/avatar/2fb62a9246f160de3ae670a875e3a747?s=200&d=monsterid&r=pg",
    name: "Bar Chart",
    status: true,
  },
};

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
    <div className="App">
      <ContactList contacts={contacts} />
      <ChatWindow messages={messages} chatTo={contactMap[chatToId]} currentUser={currentUser} />
    </div>
  );
}

export default App;
