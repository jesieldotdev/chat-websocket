import { useEffect } from "react";
import * as S from "./style";

interface chatProps {
  messageList: any;
  username: string;
  currentMessage: any;
  setCurrentMessage: any;
  sendMessage: any;
  allMessages: any
}

const Chat = ({
  messageList,
  username,
  currentMessage,
  setCurrentMessage,
  sendMessage,
  allMessages
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

  console.log(allMessages)
  // allMessages.map((item) => {
  //   ar
  // })

  return (
    <S.ChatWindow>
      <div className="chat-header">
        <p>Sala - {messageList[0]?.room || "Live Chat"}</p>
      </div>
      <div className="chat-body">

        {/* {not ? <p style={{
          color:'#fff'
        }}>{JSON.stringify(not)}</p> : null} */}

        
        
        {arraySemRepeticao.map((messageContent: any) => {
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
          placeholder="Message..."
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
