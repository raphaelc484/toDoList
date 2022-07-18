import styles from "./Task.module.css";
import trashImg from "../assets/trash.svg";

interface TaskProps {
  id: string;
  task: string;
}

export function Task({ id, task }: TaskProps) {
  console.log(task);

  return (
    <div className={styles.task}>
      <input id={id} type="checkbox" />
      <label htmlFor={id}>
        {task}
        <img src={trashImg} />
      </label>
    </div>
  );
}
