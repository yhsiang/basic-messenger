import React, {useState} from 'react';

//  MessageInputProps = {
// }
const MessageInput = ({ addMessage, currentUserId }) => {
  const [value, setValue] = useState("");
  const onKeyDown = (event) => {
    if (event.key === 'Enter') {
      addMessage({ userId: currentUserId, content: event.target.value});
      setValue("");
    }
  }
  const onChange= (event) => setValue(event.target.value);
  return (
    <div className="MessageInput">
      <input onKeyDown={onKeyDown} onChange={onChange} value={value} />
    </div>
  );
};

export default MessageInput;