import React from 'react';

export const currentUser = {
  avatarURL: "https://gravatar.com/avatar/6ad59bb2415618eeed4a1c841895e5f9?s=200&d=monsterid&r=pg",
  name: "Ly Cheng",
  status: true,
  userId: 1,
};

export const contactMap = {
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

const ContactContext = React.createContext(contactMap);

export default ContactContext;