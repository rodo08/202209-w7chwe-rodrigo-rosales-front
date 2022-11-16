interface ButtonProps {
  text: string;
  action?: () => void;
}

const Button = ({ text, action }: ButtonProps): JSX.Element => {
  return (
    <button className="button__form" onClick={action}>
      {text}
    </button>
  );
};

export default Button;
