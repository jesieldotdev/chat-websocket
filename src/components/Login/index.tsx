import { useId } from 'react'
import * as S from './style'


interface loginProps{
    setRoom: any
    setUsername: any
    joinRoom: any
    roomsList: any
    warning: string 
}

const Login = ({setRoom, setUsername, joinRoom, roomsList, warning}: loginProps) => {


    return (
        <S.LoginContainer>

          
          <h3>Open Chat</h3>


          <input
            type="text"
            placeholder="John..."
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Sala..."
            onChange={(event) => {
              setRoom(event.target.value);
            }}
          />

      <div className="warning">{warning}</div>

          <button onClick={joinRoom}>Entrar na sala</button>

          <hr style={{
            width: '100%'
          }}></hr>

          <h4>Salas ativas:</h4>
          <div className='room-list'>
          {roomsList ? roomsList.map((room:string[]) => (
            <p className='room' key={useId()}>{room}</p>
          )) : null}
          </div>
        </S.LoginContainer>
    )
}

export default Login