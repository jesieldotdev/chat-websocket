import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  color: #fefefe;
  /* background-color: red; */

  h3 {
    font-size: 42px;
    margin-bottom: 1rem;
    transform: rotate(-24deg);
    position: relative;
    left: -90px;
    top: 0;
    z-index: -999px;
    top: 40px
  }

  input {
    min-width: 210px;
    height: 40px;
    margin: 7px;
    border: 2px solid #43a047;
    border-radius: 5px;
    color: #fefefe;
    padding: 5px;
    font-size: 16px;
    display: flex;
    z-index: 5333px;
    background-color: #1e2122;
  }

  button {
    width: 225px;
    height: 50px;
    margin: 7px;
    border: none;
    border-radius: 5px;
    padding: 5px;
    font-size: 16px;
    background: #43a047;
    color: #fff;
    cursor: pointer;
    margin-left: auto;
    margin-right: auto;
  }

  button:hover {
    background: #2e7d32;
  }

  .warning{
    font-size: 12px;
    font-weight: 300px;
    text-align: left;
    margin-left: 8px;
  }
`;
