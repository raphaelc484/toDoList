import styles from "./Task.module.css";
import { Trash } from "phosphor-react";
import { ChangeEventHandler } from "react";

interface TaskProps {
  id: string;
  task: string;
  onDeleteTask: (taskId: string) => void;
}

export function Task({ id, task, onDeleteTask }: TaskProps) {
  function handleDeleteTask() {
    onDeleteTask(id);
  }

  return (
    <div className={styles.task}>
      <input id={id} type="checkbox" />
      <label htmlFor={id}>
        {task}
        <button onClick={handleDeleteTask}>
          <Trash />
        </button>
      </label>
    </div>
  );
}
