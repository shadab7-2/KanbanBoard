import React from 'react'
import styles from "./Navbar.module.css";
import ViewWeekIcon from '@mui/icons-material/ViewWeek';
import GroupIcon from '@mui/icons-material/Group';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import BoltIcon from '@mui/icons-material/Bolt';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import FilterListIcon from '@mui/icons-material/FilterList';
import { Avatar } from '@mui/material';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
const Navbar = () => {
  return (
    <div className={styles.container} >
      <div className={styles.leftnavbar}>
       <h4>Home Task Management</h4>
       <button className={styles.nav__button}><StarBorderIcon/></button>
       <button className={styles.nav__button}><GroupIcon/>Work Space</button>
       <button className={styles.nav__button}> <DashboardCustomizeIcon/>board</button>
       <button className={styles.nav__button}><ArrowDropDownIcon/></button>
      </div>
        
      <div className={styles.rightnavbar}>
       <button className={styles.nav__button}><RocketLaunchIcon/>Power-Ups</button>
       <button className={styles.nav__button}><BoltIcon/>Automation</button>
       <button className={styles.nav__button}> <FilterListIcon/>Filter</button>
       <button className={styles.nav__button}><Avatar>SA</Avatar></button>
       <button className={styles.nav__button}><PersonAddAltIcon/>Share</button>
       <button className={styles.nav__button}><MoreHorizIcon/></button>
         
      </div>
    </div>
  )
}

export default Navbar;
