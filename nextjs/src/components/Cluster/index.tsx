import styles from './styles.module.css';

type Props = {
  children: React.ReactNode;
};

export const Cluster: React.FC<Props> = ({ children }) => {
  return <div className={styles.base}>{children}</div>;
};
