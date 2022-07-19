import styles from "./TaskBoard.module.css";
import clipboardImg from "../assets/clipboard.svg";
import { useState } from "react";
import { Task } from "./Task";
import { NewTask } from "./NewTask";

export function TaskBoard() {
  const [tasks, setTasks] = useState([
    { id: "1", content: "Oi" },
    { id: "2", content: "Teste" },
  ]);

  function createTask(taskToCreate: string) {
    setTasks([
      ...tasks,
      { id: String(tasks.length + 1), content: taskToCreate },
    ]);
  }

  function deleteTask(taskToDelete: string) {
    const tasksWithoutDeleteChoose = tasks.filter((item) => {
      return item.id !== taskToDelete;
    });

    setTasks(tasksWithoutDeleteChoose);
  }

  return (
    <div>
      <NewTask onCreate={createTask} />
      <div className={styles.taskBoardHeader}>
        <strong>
          Tarefas criadas <b>{tasks.length}</b>
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
                <Task
                  id={task.id}
                  task={task.content}
                  onDeleteTask={deleteTask}
                />
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
}
