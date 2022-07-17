import styles from "./Task.module.css";
import trashImg from "../assets/trash.svg";

interface TaskProps {
  task: string;
}

export function Task({ task }: TaskProps) {
  return (
    <div className={styles.task}>
      <input type="checkbox" />
      <label>
        {task}
        <img src={trashImg} />
      </label>
    </div>
  );
}
