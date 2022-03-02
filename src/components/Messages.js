import React, { useContext } from "react";
import Input from "./Input";
import { ContextProvider } from "../context/ContextProvider";
const Messages = () => {
  const { allMsg, user } = useContext(ContextProvider);
  return (
    <div className="messages">
      {allMsg.map((message) =>
        message.email === user.email ? (
          <div className="messages_my" key={message.id}>
            <div className="messages_my-p">
              <p>{message.msg}</p>
            </div>
          </div>
        ) : (
          <div className="messages_other" key={message.id}>
            <div className="messages_img">
              <img src={message.photo} alt={message.photo} />
            </div>
            <div className="messages_msg">
              <span>{message.username}</span>
              <p>{message.msg}</p>
            </div>
          </div>
        )
      )}
      <Input />
    </div>
  );
};

export default Messages;
