import React from 'react';

export const defaultMessages = [
  {content: "oh bad!", userId: 123},
  {content: "write code", userId: 1},
  {content: "any plan today", userId: 123},
  {content: "cool nice", userId: 123},
  {content: "it's great day", userId: 1},
  {content: "hello how's going", userId: 123},
];

const MessageContext = React.createContext({
  messages: defaultMessages,
  addMessage: () => {},
});

export default MessageContext;