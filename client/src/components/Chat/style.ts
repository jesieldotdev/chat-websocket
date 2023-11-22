import styled from "styled-components";

export const ChatWindow = styled.div`
  width: 100%;
  height: 100%;
  .chat-header {
    background-color: #075a52;
    color: #fefefe;
    display: flex;
    padding: 8px;
    margin-bottom: auto;
  }

  .chat-body {
    background: #e5ded5;
    margin: 0;
    padding: 16px;
    /* width: 100%; */
    height: 100%;
    overflow-y: hidden;
    overflow-x: hidden;
  }

  .message{
    border-radius: 8px;
    max-width: 76vw;
  }

  .message-content{
    padding: 2px;
  }

  #you {
    justify-content: flex;
    background-color: #d9f4bc;
    margin-left: auto;

  }

  #you .message-content {
    justify-content: flex-start;
  }

  #you .message-meta {
    justify-content: flex-start;
    margin-left: 5px;
  }

  #other {
    justify-content: flex-end;
    background-color: #f4f4f4;
  }

  #other .message-content {
    justify-content: flex-end;
  }

  #other .message-meta {
    justify-content: flex-end;
    margin-right: 5px;
  }

  .message-meta #author {
    margin-left: 10px;
    font-weight: bold;
  }

  .chat-footer {
  height: 40px;
  border: 1px solid #263238;
  border-top: none;
  display: flex;
}

.chat-window .chat-footer input {
  height: 100%;
  flex: 85%;
  border: 0;
  padding: 0 0.7em;
  font-size: 1em;
  border-right: 1px dotted #607d8b;

  outline: none;
  font-family: "Open Sans", sans-serif;
}

.chat-footer button {
  border: 0;
  display: grid;
  place-items: center;
  cursor: pointer;
  flex: 15%;
  height: 100%;
  background: transparent;
  outline: none;
  font-size: 25px;
  color: lightgray;
}

.chat-footer button:hover {
  color: #43a047;
}
.hide {
  opacity: 0 !important;
}

`;
