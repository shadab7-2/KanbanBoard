import React, { useState, useEffect } from 'react';
import styles from './Todo.module.css';
import AddIcon from '@mui/icons-material/Add';
import Stack from '@mui/material/Stack';
import { useRecoilState } from 'recoil';
import { todoListsState } from '../../atom';

const Todo = ({ todoList }) => {
  const [data, setData] = useState('');
  const [info, setInfo] = useState([]);
  const [sum, setSum] = useState(0);
  const [todoLists, setTodoLists] = useRecoilState(todoListsState);

  useEffect(() => {
    if (todoList && todoList.items) {
      setInfo(todoList.items);
      setSum(todoList.items.length);
    }
  }, [todoList]);

  useEffect(() => {
    const updatedTodoLists = todoLists.map((list) => {
      if (list.id === todoList.id) {
        return { ...list, items: info };
      }
      return list;
    });
    setTodoLists(updatedTodoLists);
  }, [info]);

  const handleChange = (e) => {
    setData(e.target.value);
  };

  const handleClick = () => {
    if (data.length > 0) {
      setInfo([...info, data]);
      setSum(sum + 1);
    }
    setData('');
  };

  const updateHandler = (index) => {
    setData(info[index]);
  };

  const saveHandler = (index) => {
    const updatedInfo = [...info];
    updatedInfo[index] = data;
    setInfo(updatedInfo);
    setData('');
  };

  const deleteHandler = (index) => {
    const updatedInfo = info.filter((_, i) => i !== index);
    setInfo(updatedInfo);
    setSum(sum - 1);
  };

  return (
    <div className={styles.container}>
      <input
        className={styles.inputfield}
        type="text"
        value={data}
        onChange={handleChange}
      />
      <span>{sum} List created</span>

      <Stack>
        {info.map((item, index) => {
          return (
            <div className={styles.inputdata} key={index}>
              <div>
                {item}
                <button onClick={() => updateHandler(index)}>Update</button>
                <button onClick={() => deleteHandler(index)}>Delete</button>
              </div>
            </div>
          );
        })}
      </Stack>

      <button onClick={handleClick}>
        <span>
          <AddIcon />
        </span>{' '}
        Add a Card
      </button>
    </div>
  );
};

export default Todo;
