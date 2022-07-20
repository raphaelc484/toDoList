import styles from "./TaskBoard.module.css";
import clipboardImg from "../assets/clipboard.svg";
import { useState } from "react";
import { Task } from "./Task";
import { NewTask } from "./NewTask";

interface StatusProps {
  id: string;
  statusChange: boolean;
}

interface TasksProps {
  id: string;
  content: string;
  check: boolean;
}

export function TaskBoard() {
  const [tasks, setTasks] = useState<TasksProps[]>([]);

  function createTask(taskToCreate: string) {
    setTasks([
      ...tasks,
      { id: String(tasks.length + 1), content: taskToCreate, check: false },
    ]);
  }

  function deleteTask(taskToDelete: string) {
    const tasksWithoutDeleteChoose = tasks.filter((item) => {
      return item.id !== taskToDelete;
    });

    setTasks(tasksWithoutDeleteChoose);
  }

  function changeStatusTask({ id, statusChange }: StatusProps) {
    const tasksWithStatusChange = [...tasks];
    const findIndex = tasks.findIndex((item) => item.id === id);
    tasksWithStatusChange[findIndex].check = statusChange;

    setTasks(tasksWithStatusChange);
  }

  const tasksChecked = tasks.filter((item) => item.check === true);

  return (
    <div>
      <NewTask onCreate={createTask} />
      <div className={styles.taskBoardHeader}>
        <strong>
          Tarefas criadas <b>{tasks.length}</b>
        </strong>
        <strong>
          Concluídas{" "}
          {tasks.length === 0 ? (
            <b>0</b>
          ) : (
            <b>
              {tasksChecked.length} de {tasks.length}
            </b>
          )}
        </strong>
      </div>
      <ul className={styles.tasks}>
        {tasks.length === 0 ? (
          <div className={styles.taskBoardEmpty}>
            <img src={clipboardImg} />
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        ) : (
          tasks.map((task) => {
            return (
              <li key={task.id}>
                <Task
                  id={task.id}
                  task={task.content}
                  onDeleteTask={deleteTask}
                  onChangeStatus={changeStatusTask}
                />
              </li>
            );
          })
        )}
        {/* {tasks.map((task) => {
          if (task) {
            console.log(task);
            return (
              <li key={task.id}>
                <Task
                  id={task.id}
                  task={task.content}
                  onDeleteTask={deleteTask}
                  onChangeStatus={changeStatusTask}
                />
              </li>
            );
          } else {
            console.log("aqui");
            return (
              <div className={styles.taskBoardEmpty}>
                <img src={clipboardImg} />
                <strong>Você ainda não tem tarefas cadastradas</strong>
                <p>Crie tarefas e organize seus itens a fazer</p>
              </div>
            );
          } 
        })}*/}
      </ul>
    </div>
  );
}
