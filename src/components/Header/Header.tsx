import HeaderStyled from "./HeaderStyled";

const Header = (): JSX.Element => {
  return (
    <HeaderStyled className="header">
      <img
        src="../../../imgs/skull.svg"
        width="50"
        height="50"
        alt="!friend-logo"
      />
      <h1 className="header__title">!Friends.</h1>

      <div></div>
    </HeaderStyled>
  );
};

export default Header;
