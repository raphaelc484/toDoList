import styles from "./Task.module.css";
import { Trash } from "phosphor-react";
import { ChangeEvent } from "react";

interface StatusProps {
  id: string;
  statusChange: boolean;
}

interface TaskProps {
  id: string;
  task: string;
  onDeleteTask: (taskId: string) => void;
  onChangeStatus: ({ id, statusChange }: StatusProps) => void;
}

export function Task({ id, task, onDeleteTask, onChangeStatus }: TaskProps) {
  function handleDeleteTask() {
    onDeleteTask(id);
  }

  function teste(event: ChangeEvent<HTMLInputElement>) {
    console.log(event.target.checked);

    onChangeStatus({ id, statusChange: event.target.checked });
  }

  return (
    <div className={styles.task}>
      <input id={id} type="checkbox" onChange={teste} />
      <label htmlFor={id}>
        {task}
        <button onClick={handleDeleteTask}>
          <Trash />
        </button>
      </label>
    </div>
  );
}
