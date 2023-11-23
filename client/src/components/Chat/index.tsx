import { useEffect } from "react";
import * as S from "./style";

interface chatProps {
  messageList: any;
  username: string;
  currentMessage: any;
  setCurrentMessage: any;
  sendMessage: any;
}

const Chat = ({
  messageList,
  username,
  currentMessage,
  setCurrentMessage,
  sendMessage,
}: chatProps) => {
  console.log(messageList);
  return (
    <S.ChatWindow>
      <div className="chat-header">
        <p>Live Chat</p>
      </div>
      <div className="chat-body">
        {messageList.map((messageContent: any) => {
          return (
            <div
              id="message"
              className={username !== messageContent.author ? "other" : "you"}
            >
              <div>
                <div className="message-content">
                  <p>{messageContent.message}</p>
                </div>
                <div className="message-meta">
                  <p id="time">{messageContent.time}</p>
                </div>
              </div>
              {messageContent.author === username ? (
                <p className="author">{messageContent.author}</p>
              ) : (
                <p className="author">{messageContent.author}</p>
              )}
            </div>
          );
        })}
      </div>
      <div className="chat-footer">
        <input
          type="text"
          value={currentMessage}
          placeholder="Hey..."
          onChange={(event) => {
            setCurrentMessage(event.target.value);
          }}
        />
        <button className="btn" onClick={() => sendMessage()}>&#9658;</button>
      </div>
    </S.ChatWindow>
  );
};

export default Chat;
