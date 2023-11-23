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
    font-weight: 700;
  }

  .chat-body {
    min-height: 76vh;
    /* min-height: 67vh; */

    background: #1E1E1E;
    margin: 0;
    padding: 16px;
    padding-bottom: 200px;
    /* width: 100%; */
    height: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
    /* padding-bottom: 100px; */
    margin-bottom: 100px;
  }

  #message {
    border-radius: 8px;
    width: fit-content;
    max-width: 70%;
    padding: 8px;
    margin-top: 16px;
    padding-top: 0;
    padding-left: 8px;
    margin-bottom: auto;
    display: flex;
    justify-content: space-between;
    line-height: 1.2;
  }

  .message-content {
    /*padding: 2px;*/
    width: fit-content;
  }

  .you {
    justify-content: flex;
    background-color: #128C7E;
    margin-left: auto;
    color: #fff;
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
    background-color: #363636;
    color: #fff;

    .time {
      height: 100%;
      margin-top: 0px;
      display: flex;
      align-items: end;
      color: grey;
    }
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

  .author {
    font-weight: bold;
    color: orange;
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
    min-width: 82%;
    /* flex: 85%; */
    border: 0;
    border-radius: 16px;
    padding: 0 0.7em;
    font-size: 1em;
    border-right: 1px dotted #607d8b;
    margin-right: 8px;

    outline: none;
    font-family: "Open Sans", sans-serif;
    background-color: #282828;
    color: #fefefe;


  }

  .btn:hover {
    color: #fff;
  }

  .btn {
    border: 0;
    display: flex;
    width: 70px;
    height: 64px;
    align-items: center;
    justify-content: center;
    border-radius: 16px;
    padding: 8px;
    /* display: grid; */
    /* place-items: center; */
    cursor: pointer;
    /* flex: 15%; */
    height: 100%;
    background-color: #075a52;
    /* background: transparent; */
    outline: none;
    font-size: 25px;
    color: #fefefe;
  }
  .hide {
    opacity: 0 !important;
  }

  .time {
    font-size: 12px;
    margin-left: 8px;
    /*position: relative;*/
    /*top: 20px;*/
    color: #cbcbcb;
    /*background-color: red;*/
    height: 100%;
    margin-top: 0px;
    display: flex;
    align-items: end;
  }
`;
