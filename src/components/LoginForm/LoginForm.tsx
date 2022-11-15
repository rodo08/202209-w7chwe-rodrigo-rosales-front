import Button from "../Button/Button";
import LoginFormStyled from "./LoginFormStyled";

const LoginForm = (): JSX.Element => {
  return (
    <>
      <LoginFormStyled>
        <h2>Welcome, log in to continue.</h2>
        <div className="loginFormStyle__wrap">
          <form action="">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              placeholder="Write your username here"
            />
            <label htmlFor="password">Password</label>
            <input
              type="text"
              id="username"
              placeholder="Write your password here"
            />
          </form>
          <Button text="Log in" />
        </div>
      </LoginFormStyled>
    </>
  );
};
export default LoginForm;
