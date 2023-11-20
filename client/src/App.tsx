import "./App.css";
import Chat from "./components/Chat";
import Login from "./components/Login";
import IndexViewController from "./viewController";

function App() {

  const {
    showChat,
 
    username,
  
    currentMessage,
    messageList,
    sendMessage,
    setCurrentMessage,
    setRoom,
    setUsername,
    joinRoom
  } = IndexViewController()

  return (
    <div className="App">
      {!showChat ? (
        <Login setRoom={setRoom} setUsername={setUsername} joinRoom={joinRoom} />
      ) : (
        <Chat currentMessage={currentMessage} messageList={messageList} username={username} setCurrentMessage={setCurrentMessage} sendMessage={sendMessage} />
      )}
    </div>
  );
}

export default App;
