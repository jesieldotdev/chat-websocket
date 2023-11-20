import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  color: #fefefe;

  h3 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  input {
    width: 210px;
    height: 40px;
    margin: 7px;
    border: 2px solid #43a047;
    border-radius: 5px;
    padding: 5px;
    font-size: 16px;
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
  }

  button:hover {
    background: #2e7d32;
  }
`;
