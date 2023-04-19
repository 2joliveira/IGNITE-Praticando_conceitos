import { useCallback, useState } from "react";
import { PlusCircle } from "phosphor-react";
import { Task } from "./Task";
import { EmptyState } from "./EmptyState";

import styles from "./TaskList.module.css";

export interface TaskProps {
  id: string;
  task: string;
  isOpen: boolean;
}

export function TaskList() {
  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const [value, setValue] = useState<string>();

  const handleCreateTask = () => {
    if (value) {
      setTasks([...tasks, {
        id: Math.floor(Date.now() * Math.random()).toString(36),
        task: value,
        isOpen: true
      }]);
      setValue('');
    };
  };

  const handleKeyPress = (e: any) => {
    if(e.charCode === 13) {
      e.preventDefault();
      handleCreateTask();
    }
  }

  const renderTasks = useCallback(() => {
    return (
      <div>
        {tasks.map((task) => {
          return (
            <Task
              setTasks={setTasks}
              currentTask={task}
              tasks={tasks}
              handleDeleteTask={handleDeleteTask}
            />
          )
        })}
      </div>
    );
  }, [tasks]);

  const handleDeleteTask = useCallback((id: string) => {
    const currentTasks = tasks.filter((t: TaskProps) => t.id !== id);

    setTasks(currentTasks);
  }, [tasks,]);

  return (
    <main className={styles.taskList}>
      <form className={styles.taskForm}>
        <input
          type="text"
          placeholder="Adicione uma nova tarefa"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyPress={(e) => handleKeyPress(e)}
        />
        <button type="button" onClick={handleCreateTask}>
          Criar <PlusCircle size={20} weight="bold" />
        </button>
      </form>

      <div className={styles.progress}>
        <p>
          Tarefas criadas <span>{tasks.length}</span>
        </p>
        <p>
          Concluídas <span>{`${tasks.filter(task => task.isOpen === false).length} de ${tasks.length}`}</span>
        </p>
      </div>

      {tasks.length === 0 ? <EmptyState /> : renderTasks()}
    </main>
  );
}
