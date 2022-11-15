import styled from "styled-components";

const LoginFormStyled = styled.div`
  h2 {
    padding-top: 30px;
    padding-bottom: 5px;
    color: #000;
  }

  .loginFormStyle__wrap {
    background-color: #60f4e6;
    padding-top: 0;
    margin: auto;
    border-radius: 8px;
    padding: 30px;
    width: 350px;
  }

  form {
    display: flex;
    flex-direction: column;
    font-weight: bold;
    gap: 10px;

    padding-bottom: 20px;
  }

  input {
    border: none;
  }

  input[type="text"] {
    font-size: 16px;
    padding-left: 5px;
  }

  label {
    letter-spacing: 0.1rem;

    text-align: initial;
    color: #000;
  }
  form input {
    height: 50px;
    border-color: #a4a4a4 solid 1px;
    border-radius: 5px;
    padding-top: 2px;
  }

  input::placeholder {
    box-sizing: border-box;
    font-size: 16px;
    padding-top: 10px;
    padding-left: 5px;
    line-height: 25px;
    width: 100%;
  }

  button {
    width: 290px;
    height: 50px;
    font-weight: 900;
    font-size: 16px;
    border-radius: 5px;
    cursor: pointer;
    color: #fff;
    background-color: #000;
  }
`;

export default LoginFormStyled;
