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
              placeholder="write your username here"
            />
            <label htmlFor="password">Password</label>
            <input
              type="text"
              id="username"
              placeholder="write your password here"
            />
          </form>
          <button>Log in</button>
        </div>
      </LoginFormStyled>
    </>
  );
};
export default LoginForm;
