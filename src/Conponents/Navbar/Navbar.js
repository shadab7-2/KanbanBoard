import React from 'react'
import styles from "./Navbar.module.css";
import ViewWeekIcon from '@mui/icons-material/ViewWeek';
import GroupIcon from '@mui/icons-material/Group';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import StarBorderIcon from '@mui/icons-material/StarBorder';
const Navbar = () => {
  return (
    <div className={styles.container} >
      <div className={styles.leftnavbar}>
       <h4>kakan board</h4>
       <button><StarBorderIcon/></button>
       <button><GroupIcon/>Work Space</button>
       <button> <ViewWeekIcon/>board</button>
       <button>dropdown</button>
      </div>
        
      <div className={styles.rightnavbar}>
       <button>Power-Ups</button>
       <button>Automation</button>
       <button>Filter</button>
       <button>SignIn</button>
       <button>Share</button>
       <button><MoreHorizIcon/></button>
         
      </div>
    </div>
  )
}

export default Navbar
