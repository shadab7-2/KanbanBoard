import React, { useState } from "react";
import styles from "./DialogBox.module.css";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import EditNoteIcon from '@mui/icons-material/EditNote';
import CloseIcon from "@mui/icons-material/Close";
import CallToActionIcon from "@mui/icons-material/CallToAction";
import QuillEditor from "./Quill";
import SubjectIcon from '@mui/icons-material/Subject';
import TextField from "@mui/material/TextField";
import { Avatar } from "@mui/material";
import {useNavigate} from "react-router-dom"

const DialogBox = () => {
  const [showDescription, setShowDescription] = useState(true);
  const [showActivity, setShowActivity] = useState(true);
  const[show, setShow] = useState(true)
  const infodata = JSON.parse(localStorage.getItem("info"));
  console.log(infodata);
  const handleDescription = () => {
    setShowDescription(!showDescription);
  };

  const handleActivity = () => {
    setShowActivity(!showActivity);
  };
const handleShowcomment = () =>{
  setShow(!show)
};
 const navigate = useNavigate();
 const handleClose = () =>{
     navigate("/")
 }

  return (
    <div className={styles.main}>
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.windoIcon}>
          <CallToActionIcon />
        </div>

        <div className={styles.title}>
          <h5>{infodata[1]}, </h5>
          <span> in {infodata[0]}</span>
        </div>
    
          <button className={styles.closebutton} onClick={handleClose}> <CloseIcon /></button>
          

      </div>
      <div className={styles.sideboard}>
        <div className={styles.leftside}>
          <div className={styles.notification}>
            <span> Notificaion</span>
          </div>
          <div className={styles.description}>
            <span><SubjectIcon/>Description</span>
            {showDescription ? (
              <button onClick={handleDescription}>
                <TextField
                  id="outlined-search"
                  label="Add a more details description..."
                  type="search"
                />
              </button>
            ) : (<div className={styles.quill}> 
              <QuillEditor />
                <div className={styles.button}>
               <button>Save</button>
               <button onClick={handleDescription}>Cancel</button>
               </div>
               </div>
            )}
          </div>
          <div className={styles.activity}>
            <span><EditNoteIcon/>Activity
             {show?
             <button onClick={handleShowcomment}>Hide</button>
             :
             <button onClick={handleShowcomment}>Show</button>}</span>
            {showActivity ? (
              <button onClick={handleActivity}>
                <TextField
                  id="outlined-search"
                  label="Add a more details description..."
                  type="search"
                />
              </button>
            ) :(<div className={styles.quill}> 
              <QuillEditor />
                <div className={styles.button}>
               <button>Save</button>
               <button onClick={handleActivity}>Cancel</button>
               </div>
               </div>
            )}
            
          </div>
          <diV className = {styles.comment}>
            {
              show?<> <span><Avatar>SA</Avatar></span>
              <div><strong>Shadab Ansari</strong> added this card to {infodata[1]} </div></>: " "
            }
            
        
          </diV>
        </div>
        <div className={styles.rightside}>
          <div>
            <span>Add to card</span>
            <button className={styles.button}> <GroupAddIcon/>Member</button>
            <button className={styles.button}> <GroupAddIcon/>Labels</button>
            <button className={styles.button}> <GroupAddIcon/>checklist</button>
            <button className={styles.button}> <GroupAddIcon/>Dates</button>
            <button className={styles.button}> <GroupAddIcon/>Attachment</button>
            <button className={styles.button}> <GroupAddIcon/>Cover</button>
            <button className={styles.button}> <GroupAddIcon/>Custom Fields</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default DialogBox;
