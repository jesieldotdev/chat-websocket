import io from "socket.io-client";
import { useEffect, useState } from "react";

// const url = "http://localhost:5000";
const url = "18.231.159.123:5000"

const socket = io(url);

export interface messageProps {
  _id: string;
  room: string;
  author: string;
  time: string;
  message: string;
  __v: number;
}

export interface userProps {
  user: string
  room: string
}

const IndexViewController = () => {
  const [username, setUsername] = useState<string>("");
  const [room, setRoom] = useState<string>("");
  const [showChat, setShowChat] = useState<boolean>(false);
  const [rooms, setRooms] = useState<string[]>();
  const [allMessages, setAllMessages] = useState<messageProps[] | undefined>();
  const [warnings, setWarnings] = useState<string[]>();
  const [users, setUsers] = useState<userProps[]>();

  const joinRoom = async() => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", { room: room, user: username });
      setShowChat(true);
      await socket.on("getUsers", (users) => {
        if (users) {
          setUsers(users);
        }
      });
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
      setAllMessages((list) => [...list, messageData]);
      setCurrentMessage("");
    }
  };

  useEffect(() => {
    // socket.on("receive_message", (data) => {
    //   setMessageList((list) => [...list, data]);
    // });

    socket.on("warning", (data) => {
      if (data) {
        setWarnings(data);
      }
    });

    socket.on("getMessages", (data) => {
      if (data) {
        setAllMessages(data);
      }
    });

    socket.on("updateRooms", (rooms) => {
      if (rooms) {
        setRooms(rooms);
      }
    });

 
  }, [socket]);

useEffect(()=> {
     socket.on("getUsers", (users) => {
      if (users) {
        setUsers(users);
      }
    });

}, [socket])

  console.log(warnings);
  return {
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
    setMessageList,
    messageList,
    sendMessage,
    allMessages,
    rooms,
    warnings,
    users
  };
};

export default IndexViewController;
