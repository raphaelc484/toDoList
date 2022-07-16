import styles from "./TaskBoard.module.css";

export function TaskBoard() {
  return (
    <div>
      <div className={styles.taskBoardHeader}>
        <strong>Tarefas criadas</strong>
        <strong>Concluídas</strong>
      </div>
    </div>
  );
}
