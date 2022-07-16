import styles from "./NewTask.module.css";
import plusImg from "../assets/plus.svg";

export function NewTask() {
  return (
    <div>
      <form className={styles.taskForm}>
        <textarea name="newTask" placeholder="Adicione uma nova tarefa" />

        <button type="submit">
          Criar
          <img src={plusImg} />
        </button>
      </form>
    </div>
  );
}
