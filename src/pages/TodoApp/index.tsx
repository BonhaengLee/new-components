import TodoApp from "../../components/Todo";

import styles from "./TodoApp.module.scss";

const index = (): JSX.Element => {
  return (
    <div className={styles.todoApp}>
      <TodoApp />
    </div>
  );
};

export default index;
