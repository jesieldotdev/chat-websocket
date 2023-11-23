import io from "socket.io-client";
import { useEffect, useState } from "react";

// const url = "http://localhost:5000"
const url = "https://powerful-oxidized-navy.glitch.me/"

const socket = io(url);



const IndexViewController = () => {

    const [username, setUsername] = useState("");
    const [room, setRoom] = useState("");
    const [showChat, setShowChat] = useState(false);
  
    const joinRoom = () => {
      if (username !== "" && room !== "") {
        socket.emit("join_room", room);
        setShowChat(true);
      }
    };

    const [currentMessage, setCurrentMessage] = useState("");
    const [messageList, setMessageList] = useState([]);
  
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
        setMessageList((list) => [...list, messageData]);
        setCurrentMessage("");
      }
    };
  
    useEffect(() => {
      socket.on("receive_message", (data) => {
        setMessageList((list) => [...list, data]);
      });
    }, [socket]);

    // console.log(messageList)

    return{
        username,
        setUsername,
        room,
        setRoom,
        showChat,
        setShowChat,
        joinRoom,
        socket,
        currentMessage,
        setCurrentMessage,
        setMessageList,messageList, sendMessage

    }
}

export default IndexViewController