import LoginForm from "../LoginForm/LoginForm";
import HeaderStyled from "./HeaderStyled";

const Header = (): JSX.Element => {
  return (
    <>
      <HeaderStyled className="header">
        <img
          src="../../../imgs/skull.svg"
          width="50"
          height="50"
          alt="!friend-logo"
        />
        <h1 className="header__title">!Unfriends.</h1>

        <div></div>
      </HeaderStyled>
      <LoginForm />
    </>
  );
};

export default Header;
