// import "./App.css";
import Chat from "./components/Chat";
import Login from "./components/Login";
import IndexViewController from "./viewController";
import * as S from './style'
import Plane from './assets/paper-plane.json'
import Lottie from 'lottie-react'

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
    warnings,
    users
  } = IndexViewController();

  return (
    <S.AppContainer>

          {/* <Lottie animationData={Plane} className="lottie" /> */}

      {!showChat || warnings === 'Nome de usuário já em uso' ? (
        <Login
          setRoom={setRoom}
          setUsername={setUsername}
          joinRoom={joinRoom}
          roomsList={rooms}
          warning={warnings}
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
          users={users}
        />
      )}
    </S.AppContainer>
  );
}

export default App;
