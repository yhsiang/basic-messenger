import React from 'react';
import ContactList from './components/ContactList';
import './App.css';

const contacts = [{
    avatarURL: "https://gravatar.com/avatar/76f75d5b2c6839cc6ab4a593c1d90149?s=200&d=monsterid&r=pg",
    name: "Foo One",
    status: true
  },{
    avatarURL: "https://gravatar.com/avatar/2fb62a9246f160de3ae670a875e3a747?s=200&d=monsterid&r=pg",
    name: "Bar Chart",
    status: true
  },
];

function App() {
  return (
    <div className="App">
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
