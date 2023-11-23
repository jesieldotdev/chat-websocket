import styled from "styled-components";

export const ChatWindow = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  max-height: 100vh;
  overflow-y: hidden;
  /* margin: 0px; */
  height: 100vh;


  .chat-header {
    background-color: #075a52;
    color: #fefefe;
    /* display: flex; */
    padding: 8px;
    /* margin-bottom: auto; */
    position: relative;
    top: 0px;
  }

  .chat-body {
  min-height: 92%;
  /* min-height: 67vh; */

    background: #e5ded5;
    margin: 0;
    padding: 16px;
    padding-bottom: 200px;
    /* width: 100%; */
    height: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
    margin-bottom: auto;

  }

  #message{
    border-radius: 8px;
    max-width: 88%;
    padding: 8px;
    margin-top: 16px;
    padding-top: 0;
  }

  .message-content{
    padding: 2px;
  }

  .you {
    justify-content: flex;
    background-color: #d9f4bc;
    margin-left: auto;

  }

  .you .message-content {
    justify-content: flex-start;
  }

  .you .message-meta {
    justify-content: flex-start;
    margin-left: 5px;
  }

  .other {
    justify-content: flex-end;
    background-color: #f4f4f4;
  }

  .other .message-content {
    justify-content: flex-end;
  }

  .other .message-meta {
    justify-content: flex-end;
    margin-right: 5px;
  }

  .message-meta .author {
    margin-left: 10px;
  }

  .author{
    font-weight: bold;

  }

  .chat-footer {
  margin: 12px;
  height: 70px;
  /* border: 1px solid #263238; */
  border-radius: 16px;
  border-top: none;
  /* overflow: hidden; */
  
  position: sticky;
  bottom: 10px;
  display: flex;
  justify-content: space-between;
}

 input {
  height: 50px;
display: flex;
min-width: 84%;
  /* flex: 85%; */
  border: 0;
  border-radius: 16px;
  padding: 0 0.7em;
  font-size: 1em;
  border-right: 1px dotted #607d8b;
  margin-right: 8px;
  
  outline: none;
  font-family: "Open Sans", sans-serif;
}



.btn:hover {
  color: #fff;
}

.btn {
  border: 0;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content:center;
  border-radius: 60%;
  /* display: grid; */
  /* place-items: center; */
  cursor: pointer;
  /* flex: 15%; */
  height: 100%;
  /* background-color: #075a52; */
  background: transparent;
  outline: none;
  font-size: 25px;
  color: #282828;
}
.hide {
  opacity: 0 !important;
}

`;
