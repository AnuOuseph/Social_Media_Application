/* eslint-disable no-unused-vars */
import "./navBar.scss"
import {Link} from "react-router-dom"
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { useContext } from "react";
import { DarkModeContext } from "../../context/DarkModeContext";
import { AuthContext } from "../../context/AuthContext";

function NavBar() {
  const {toggle,darkMode} = useContext(DarkModeContext)
  const {currentUser} = useContext(AuthContext)
  return (
    <div className="navBar">
      <div className="left">
        <Link to='/' style={{textDecoration: "none"}}>
          <span>Logo</span>
        </Link>
        <HomeOutlinedIcon style={{width:"22px"}}/>
        {darkMode?<WbSunnyOutlinedIcon style={{width:"22px"}} onClick={toggle}/>:<DarkModeOutlinedIcon style={{width:"22px"}} onClick={toggle}/>}
        <GridViewOutlinedIcon style={{width:"22px"}}/>
        <div className="search">
          <SearchOutlinedIcon style={{width:"22px"}}/>
          <input type="text" placeholder="Search.." />
        </div>
      </div>
      <div className="right">
        <PersonOutlineOutlinedIcon style={{width:"22px"}}/>
        <NotificationsNoneOutlinedIcon style={{width:"22px"}}/>
        <EmailOutlinedIcon style={{width:"22px"}}/>
        <div className="user">
          <img src={currentUser.profilePic} alt="" />
          <span>{currentUser.name}</span>
        </div>
      </div>
    </div>
  )
}

export default NavBar
