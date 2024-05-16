
type Props = {
  children: React.ReactNode;
  onClick?: () => void;
};

export const Button: React.FC<Props> = ({ children, onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  }

  return <button onClick={handleClick}>{children}</button>;
};
