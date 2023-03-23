import { Trash } from "phosphor-react";
import { useCallback, useState } from "react";
import { TaskProps } from "./TaskList";
import styles from "./Task.module.css";

interface TasksProps {
  setTasks: any;
  currentTask: TaskProps;
  tasks: TaskProps[];
  handleDeleteTask: any;
}

export function Task({ setTasks, currentTask, tasks, handleDeleteTask }: TasksProps) {
  const handleChangeTask = useCallback((status: any) => {
    const currentTasks = tasks.filter((t: any) => t.id !== currentTask.id);

    setTasks([...currentTasks, { ...currentTask, isOpen: status }]);
  }, [tasks, currentTask, setTasks]);

  return (
    <div className={styles.task}>
      <input
        title="checkbox"
        type="checkbox"
        checked={!currentTask.isOpen}
        onChange={() =>  handleChangeTask(!currentTask.isOpen)}
      />

      <p>{currentTask.task}</p>

      <button type="button" onClick={() => handleDeleteTask(currentTask.id)}>
        <Trash size={20} />
      </button>
    </div>
  );
}
