# Basic Messenger

This is a basic messenger app.

# Install

Please install dependencies first and start local dev server.
* `$ yarn install`
* `$ yarn start`

# Design

Initial idea

```
<App>
  <ChatWindow>
    <MessageList>
      <Message>
        <Avatar />
        <Content />
      </Message>
    </MessageList>
    <MessageInput />
  </ChatWindow>
  <ContactList>
    <Contact>
      <Avatar />
      <Name />
      <Status />
    </Contact>
  </ContactList>
</App>
```