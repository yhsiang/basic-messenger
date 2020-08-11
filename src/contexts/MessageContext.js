import React from 'react';

export const defaultChatToId = 123;
export const defaultMessages = {
  123: [
    {content: "oh bad!", userId: 123},
    {content: "write code", userId: 1},
    {content: "any plan today", userId: 123},
    {content: "cool nice", userId: 123},
    {content: "it's great day", userId: 1},
    {content: "hello how's going", userId: 123},
  ],
  456: [],
};

const MessageContext = React.createContext({
  messageMap: defaultMessages,
  chatToId: defaultChatToId,
  addMessage: () => {},
  changeContact: () => {},
});

export default MessageContext;