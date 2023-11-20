import * as S from './style'

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
  return (
    <S.ChatWindow>
      <div className="chat-header">
        <p>Live Chat</p>
      </div>
      <div className="chat-body">
        {messageList.map((messageContent: any) => {
          return (
            <div
              className="message"
              id={username === messageContent.author ? "you" : "other"}
            >
              <div>
                <div className="message-content">
                  <p>{messageContent.message}</p>
                </div>
                <div className="message-meta">
                  <p id="time">{messageContent.time}</p>
                  <p id="author">{messageContent.author}</p>
                </div>
              </div>
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
          onKeyPress={(event) => {
            event.key === "Enter" && sendMessage();
          }}
        />
        <button onClick={sendMessage}>&#9658;</button>
      </div>
    </S.ChatWindow>
  );
};

export default Chat;
