import { useEffect } from "react";
import * as S from "./style";

interface chatProps {
  messageList: any;
  username: string;
  currentMessage: any;
  setCurrentMessage: any;
  sendMessage: any;
}

const Chat = ({
  messageList,
  username,
  currentMessage,
  setCurrentMessage,
  sendMessage,
}: chatProps) => {
  
  let arrayOriginal = [
    { id: 1, nome: "Objeto 1" },
    { id: 2, nome: "Objeto 2" },
    { id: 1, nome: "Objeto 1" }, // Duplicado
    { id: 3, nome: "Objeto 3" },
  ];

  // Função para remover objetos duplicados com base na propriedade 'id'
  function removerDuplicados(array, propriedade) {
    return array.filter(
      (obj, index, self) =>
        index === self.findIndex((el) => el[propriedade] === obj[propriedade])
    );
  }

  // Remover objetos duplicados com base na propriedade 'id'
  let arraySemRepeticao = removerDuplicados(messageList, "message");

  

  return (
    <S.ChatWindow>
      <div className="chat-header">
        <p>Sala - {messageList[0]?.room || "Live Chat"}</p>
      </div>
      <div className="chat-body">
        
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
