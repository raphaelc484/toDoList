import styles from "./Header.module.css";
import rocketLogo from "../assets/rocket.svg";
import todoLogo from "../assets/todo.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={rocketLogo} alt="imagem foguete" />
      <img src={todoLogo} alt="imagem todo" />
    </header>
  );
}
