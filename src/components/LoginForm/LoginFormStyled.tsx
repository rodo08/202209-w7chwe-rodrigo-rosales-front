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

  label {
    text-align: initial;
    color: #000;
  }
  form input {
    height: 50px;
    border-color: #a4a4a4 solid 1px;
    border-radius: 5px;
    padding-bottom: 5px;
  }

  button {
    width: 350px;
    height: 50px;
    font-weight: 900;
    font-size: 16px;
    border-radius: 5px;

    color: #fff;
    background-color: #000;
  }
`;

export default LoginFormStyled;
