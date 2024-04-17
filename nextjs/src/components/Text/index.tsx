
type Props = {
  children: React.ReactNode;
};

export const Text: React.FC<Props> = ({ children }) => {
  return (
    <p>{children}</p>
  );
}
