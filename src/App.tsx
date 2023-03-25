import { Header } from "./components/Header";
import "./global.css";
import styles from "./App.module.css";
import { TaskList } from "./components/TaskList";

export function App() {
  return (
    <div className={styles.content}>
      <Header />
      <TaskList />
    </div>
  );
}
