import { useEffect } from "react";
import * as S from "./style";
import { userProps } from "../../viewController";

interface chatProps {
  messageList: any;
  username: string;
  currentMessage: any;
  setCurrentMessage: any;
  sendMessage: any;
  allMessages: any
  warnings: any
  users: userProps

}

const Chat = ({
  messageList,
  username,
  currentMessage,
  setCurrentMessage,
  sendMessage,
  allMessages,
  warnings,
  users
}: chatProps) => {
  



  // Função para remover objetos duplicados com base na propriedade 'id'
  function removerDuplicados(array, propriedade) {
    return array.filter(
      (obj, index, self) =>
        index === self.findIndex((el) => el[propriedade] === obj[propriedade])
    );
  }

  // Remover objetos duplicados com base na propriedade 'id'
  let arraySemRepeticao = removerDuplicados(messageList, "message");

  console.log(warnings)
  console.log(allMessages)
  console.log(users)
  // allMessages.map((item) => {
  //   ar
  // })

  return (
    <S.ChatWindow>
      <div className="chat-header">
        <p>{users && users[0]?.room || "Live Chat"}</p>
        <div className="users">{
          users && users?.map((user:userProps) => (
            
            <span key={user.user}> {user.user} {users[users.length - 1] !== user ? ',' : null}</span>)
          )
}</div>

      </div>
      <div className="chat-body">

      <div className="warnings">{warnings}</div>


        
        
        {allMessages && allMessages.map((messageContent: any) => {
          return (
            <div
              id="message"
              className={username !== messageContent.author ? "other" : "you"}
            >
              <div className="message-content">
                {messageContent.author !== username ? (
                  <p className="author">{messageContent.author}</p>
                ) : null}
                <p>{messageContent.message}</p>
              </div>

              <div className="message-meta">
                <p className="time">{messageContent.time}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="chat-footer">
        <input
          type="text"
          value={currentMessage}
          placeholder="Mensagem..."
          onChange={(event) => {
            setCurrentMessage(event.target.value);
          }}
        />
        <button className="btn" onClick={() => sendMessage()}>
          &#9658;
        </button>
      </div>
    </S.ChatWindow>
  );
};

export default Chat;
