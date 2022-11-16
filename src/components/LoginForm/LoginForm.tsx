import { useState } from "react";
import useUser from "../../hooks/useUser/useUser";
import { UserCredentials } from "../../types/types";
import Button from "../Button/Button";
import LoginFormStyled from "./LoginFormStyled";

const LoginForm = (): JSX.Element => {
  const { loginUser } = useUser();

  const intialFormData = {
    username: "",
    password: "",
  };

  const [formData, setFormData] = useState(intialFormData);

  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();

    const formDataToSubmit: UserCredentials = {
      username: formData.username,
      password: formData.password,
    };
    loginUser(formDataToSubmit);
  };

  return (
    <>
      <LoginFormStyled>
        <h2>Welcome, log in to continue.</h2>
        <div className="loginFormStyle__wrap">
          <form onSubmit={(event) => handleSubmit(event)}>
            <label htmlFor="username">Username</label>

            <input
              type="text"
              name="username"
              id="username"
              placeholder="Write your username here"
              className="login-form__field"
              aria-label="username-field"
              onChange={handleFormChange}
              autoComplete="off"
              required
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="login-form__field"
              aria-label="password-input"
              onChange={handleFormChange}
              autoComplete="off"
              required
            />

            <a
              className="login-form__forgot-password"
              href="https://media.tenor.com/yheo1GGu3FwAAAAd/rick-roll-rick-ashley.gif"
            >
              Forgot your Password?
            </a>

            <Button action={() => {}} text="Log in" />
          </form>
          <span>
            Not registered yet?{" "}
            <a
              className="login-form__signin"
              href="https://media.tenor.com/yheo1GGu3FwAAAAd/rick-roll-rick-ashley.gif"
            >
              Sign up!
            </a>
          </span>
        </div>
      </LoginFormStyled>
    </>
  );
};
export default LoginForm;
