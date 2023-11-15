import { useEffect, useState } from "react";
import io from "socket.io-client";
import Chat from "./Chat";

const socket = io.connect("http://localhost:5000");

function App() {
  const [username, setUsername] = useState<string>("");
  const [room, setRoom] = useState<string>("");

  const joinRoom = () => {;
  if (username !== "" && room !== "") {
    socket.emit("join_room", username);
  }
  }

  return (
    <>
      <h3>Join a chat</h3>
      <input
        type="text"
        placeholder="John"
        onChange={(e: any) => setUsername(e.target.value)}
      />
      <input
        type="text"
        placeholder="Room ID"
        onChange={(e: any) => setRoom(e.target.value)}
      />
      <button onClick={() => joinRoom()}>Join the ROOM</button>

      <Chat socket={socket} username={username} room={room} />
    </>
  );
}

export default App;
