import React from "react";

import styles from "./EmptyState.module.css";
import clipboard from "../assets/clipboard.svg";

export function EmptyState() {
  return (
    <div className={styles.emptyState}>
        <img src={clipboard} />
      <span>
        <p>Você ainda não tem tarefas cadastradas</p>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </span>
    </div>
  );
}
