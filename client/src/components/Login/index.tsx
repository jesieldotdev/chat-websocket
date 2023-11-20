import * as S from './style'

interface loginProps{
    setRoom: any
    setUsername: any
    joinRoom: any
}

const Login = ({setRoom, setUsername, joinRoom}: loginProps) => {


    return (
        <S.LoginContainer>
          <h3>Join A Chat</h3>
          <input
            type="text"
            placeholder="John..."
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Room ID..."
            onChange={(event) => {
              setRoom(event.target.value);
            }}
          />
          <button onClick={joinRoom}>Join A Room</button>
        </S.LoginContainer>
    )
}

export default Login