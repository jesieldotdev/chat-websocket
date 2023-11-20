import "./App.css";
import Chat from "./components/Chat";
import Login from "./components/Login";
import IndexViewController from "./viewController";

function App() {

  const {
    showChat,
    setUsername,
    setRoom,
    joinRoom,
    socket,
    username,
    room,
    setShowChat,
    currentMessage,
    messageList,
    sendMessage,
    setCurrentMessage,
    setMessageList
  } = IndexViewController()

  return (
    <div className="App">
      {!showChat ? (
        <Login />
      ) : (
        <Chat currentMessage={currentMessage} messageList={messageList} username={username} setCurrentMessage={setCurrentMessage} sendMessage={sendMessage} />
      )}
    </div>
  );
}

export default App;
