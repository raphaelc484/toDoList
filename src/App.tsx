import styles from "./App.module.css";
import "./global.css";
import { Header } from "./components/Header";
import { TaskBoard } from "./components/TaskBoard";

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <TaskBoard />
      </div>
    </div>
  );
}

export default App;
