import styles from "./NewTask.module.css";
import plusImg from "../assets/plus.svg";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";

interface Teste {
  onCreate: (taskText: string) => void;
}

export function NewTask({ onCreate }: Teste) {
  const [newTask, setNewTask] = useState("");

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    onCreate(newTask);
    setNewTask("");
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("");
    setNewTask(event.target.value);
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("É necessária uma tarefa");
  }

  return (
    <div>
      <form onSubmit={handleCreateNewTask} className={styles.taskForm}>
        <textarea
          name="newTask"
          placeholder="Adicione uma nova tarefa"
          value={newTask}
          onChange={handleNewTaskChange}
          onInvalid={handleNewTaskInvalid}
          required
        />

        <button type="submit">
          Criar
          <img src={plusImg} />
        </button>
      </form>
    </div>
  );
}
