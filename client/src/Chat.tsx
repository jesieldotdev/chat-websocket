import { useEffect, useState } from "react";

interface ChatProps {
  socket: any;
  username: any;
  room: any;
}

const Chat = ({ socket, username, room }: ChatProps) => {
  const [currentMessage, setCurrentMessage] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        room: room,
        author: username,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };

      await socket.emit("send_message", messageData);
    }
  };

  useEffect(() => {
    socket.on("receive_message", (data: any) => {
      console.log(data);
      setMessage(data)
    });
  }, [socket]);




  return (
    <div>
      <div className="chat-header">
        <p>Live Chat</p>
      </div>
      <div className="chat-body">
        <input
          type="text"
          placeholder="Hey..."
          onChange={(e: any) => setCurrentMessage(e.target.value)}
        />
        <button onClick={() => sendMessage()}>&#9658;</button>
      </div>
      <div className="chat-footer">
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Chat;
