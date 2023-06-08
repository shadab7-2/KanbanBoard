import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Todo from './Todo';
import styles from './Board.module.css';
import { useRecoilState } from 'recoil';
import { todoListsState } from '../../atom';
import { v4 as uuidv4 } from 'uuid';

const Board = () => {
  const { boardId } = useParams();
  const [todoCount, setTodoCount] = useState(0);
  const [todoLists, setTodoLists] = useRecoilState(todoListsState);

  useEffect(() => {
    // Load todo lists from local storage on component mount
    const storedTodoLists = localStorage.getItem('todoLists');
    if (storedTodoLists) {
      setTodoLists(JSON.parse(storedTodoLists));
      setTodoCount(JSON.parse(storedTodoLists).length);
    }
  }, []);

  useEffect(() => {
    // Save todo lists to local storage whenever it changes
    localStorage.setItem('todoLists', JSON.stringify(todoLists));
    setTodoCount(todoLists.length);
  }, [todoLists]);

  const handleAddTodo = () => {
    const newTodoList = {
      id: uuidv4(),
      title: 'New List',
    };
    setTodoLists([...todoLists, newTodoList]);
  };

  const todoComponents = todoLists.map((todoList) => (
    <Todo key={todoList.id} todoList={todoList} className={styles.userinput} />
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
};

export default Board;
