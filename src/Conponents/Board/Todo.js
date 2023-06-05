import React from "react";
import styles from "./Todo.module.css";
import { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Stack from '@mui/material/Stack';


const Todo = () => {
  const [data, setdata] = useState("");
  const [info, setinfo] = useState([]);

  const handleChange = (e) => {
    setdata(e.target.value);
  };

  const handleClick = () => {
    (data.length > 0 ) && setinfo([...info, data]);
    setdata("");
  };

  return (
    <div className={styles.container}>
      <input className= {styles.inputfield} type="text" value={data} onChange={handleChange} />
      <Stack>
        {  info.map((item, index) => {
          return <box className = {styles.inputdata} key={index}> {item}</box>;
        })}

      </Stack>
      <button onClick={handleClick}><span><AddIcon/></span> Add a Card</button>

      
    </div>
  );
};

export default Todo;

// import React, { useState } from "react";

// export default function Todo() {
//   const [data, setdata] = useState("");
//   const [info, setinfo] = useState([]);

//   const handleChange = (e) => {
//     setdata(e.target.value);
//   };

//   const handleClick = () => {
//     setinfo([...info, data]);
//     setdata("");
//   };

//   return (
//     <div>
//       <input type="text" value={data} onChange={handleChange} />
//       <button onClick={handleClick}>+</button>

//       <ol>
//         {info.map((item, index) => {
//           return <li key={index}> {item}</li>;
//         })}
//       </ol>
//     </div>
//   );
// }
