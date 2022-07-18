import styles from "./TaskBoard.module.css";
import clipboardImg from "../assets/clipboard.svg";
import { useState } from "react";
import { Task } from "./Task";

export function TaskBoard() {
  const [tasks, setTasks] = useState([
    { id: "1", content: "Oi" },
    { id: "2", content: "Teste" },
  ]);

  return (
    <div>
      <div className={styles.taskBoardHeader}>
        <strong>
          Tarefas criadas <b>0</b>
        </strong>
        <strong>
          Concluídas <b>0</b>
        </strong>
      </div>
      <ul className={styles.tasks}>
        {tasks.map((task) => {
          if (!task) {
            return (
              <div className={styles.taskBoardEmpty}>
                <img src={clipboardImg} />
                <strong>Você ainda não tem tarefas cadastradas</strong>
                <p>Crie tarefas e organize seus itens a fazer</p>
              </div>
            );
          } else {
            return (
              <li key={task.id}>
                <Task id={task.id} task={task.content} />
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
}
