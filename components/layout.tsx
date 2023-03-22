import styles from "./layout.module.css";

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className={styles.container}>{children}</div>
);

export default Layout;
