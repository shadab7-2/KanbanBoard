import React from "react";
import styles from "./Todo.module.css";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Stack from "@mui/material/Stack";
import { Modal } from "@mui/material";
import { useNavigate } from "react-router-dom";


const Todo = () => {
  const [data, setdata] = useState("");
  const [info, setinfo] = useState([]);
  const [open, setOpen] = useState(false);
 // const handleNavigate = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();
  const handleNavigate =(index)=>{
       navigate("/task/id")
    // styles = {backgroundColor:"black", height:"100px", width:"100px"}
  }
  const handleChange = (e) => {
    setdata(e.target.value);
  };

  const handleClick = () => {
    data.length > 0 && setinfo([...info, data]);
    setdata("");
  };
  localStorage.setItem('info', JSON.stringify(info))
  return (
    <div className={styles.container}>
      <input
        className={styles.inputfield}
        type="text"
        value={data}
        onChange={handleChange}
      />
      <div>
      </div>
      <Stack>
        {info.map((item, index) => {
          return (
            <button key={index} onClick={handleNavigate}>
              <div className={styles.inputdata}>{item}</div>
            </button>
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
