import React, { useState } from "react";
import styles from "./Todo.module.css";
import AddIcon from "@mui/icons-material/Add";
import Stack from "@mui/material/Stack";
import { editIndexState, sumState, dataState, infoState } from "../../atom";
import { useRecoilState } from "recoil";

const Todo = () => {
  const [data, setData] = useState("");
  const [info, setInfo] = useState([]);
  const [sum, setSum] = useRecoilState(sumState);
  const [editIndex, setEditIndex] = useRecoilState(editIndexState);

  const handleChange = (e) => {
    setData(e.target.value);
  };

  const handleClick = () => {
    if (data.length > 0) {
      setInfo([...info, data]);
      setSum(sum + 1);
    }
    setData("");
  };

  const updateHandler = (index) => {
    setEditIndex(index);
    setData(info[index]);
  };

  const saveHandler = (index) => {
    const updatedInfo = [...info];
    updatedInfo[index] = data;
    setInfo(updatedInfo);
    setEditIndex(null);
    setData("");
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
              {editIndex === index ? (
                <div>
                  <input type="text" value={data} onChange={handleChange} />
                  <button onClick={() => saveHandler(index)}>Save</button>
                </div>
              ) : (
                <div>
                  {item}
                  <button onClick={() => updateHandler(index)}>Update</button>
                  <button onClick={() => deleteHandler(index)}>Delete</button>
                </div>
              )}
            </div>
          );
        })}
      </Stack>

      <button onClick={handleClick}>
        <span>
          <AddIcon />
        </span>{" "}
        Add a Card
      </button>
    </div>
  );
};

export default Todo;
