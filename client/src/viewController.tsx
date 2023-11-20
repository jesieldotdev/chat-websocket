import io from "socket.io-client";
import { useState } from "react";

const socket = io.connect("http://localhost:3000");

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

    return{
        username,
        setUsername,
        room,
        setRoom,
        showChat,
        setShowChat,
        joinRoom,
        socket

    }
}

export default IndexViewController