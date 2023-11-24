// import "./App.css";
import Chat from "./components/Chat";
import Login from "./components/Login";
import IndexViewController from "./viewController";
import * as S from './style'

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
    joinRoom,
    allMessages,
    rooms,
    warnings
  } = IndexViewController();

  return (
    <S.AppContainer>
      {!showChat ? (
        <Login
          setRoom={setRoom}
          setUsername={setUsername}
          joinRoom={joinRoom}
          roomsList={rooms}
        />
      ) : (
        <Chat
          currentMessage={currentMessage}
          messageList={messageList}
          username={username}
          setCurrentMessage={setCurrentMessage}
          sendMessage={sendMessage}
          allMessages={allMessages}
          warnings={warnings}
        />
      )}
    </S.AppContainer>
  );
}

export default App;
