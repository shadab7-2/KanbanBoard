import React, { useState } from "react";
import Todo from "./Todo";
import styles from "./Board.module.css";
import { useRecoilState } from "recoil";

export default function Board() {
  const [todoCount, setTodoCount] = useState(0);

  const handleAddTodo = () => {
    setTodoCount(todoCount + 1);
  };

  const todoComponents = [...Array(todoCount)].map((_, index) => (
    <Todo key={index} className={styles.userinput} />
  ));

  return (
    <div className={styles.container}>
      <div className={styles.todo__container}>{todoComponents}</div>
      <div className={styles.button__container}>
        {todoCount === 0 ? (
          <button onClick={handleAddTodo} className={styles.button}>
            Add a list
          </button>
        ) : (
          <button onClick={handleAddTodo} className={styles.button}>
            Add Another list
          </button>
        )}
      </div>
    </div>
  );
}
