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

function NavBar() {
  const {toggle,darkMode} = useContext(DarkModeContext)
  return (
    <div className="navBar">
      <div className="left">
        <Link to='/' style={{textDecoration: "none"}}>
          <span>Ixia</span>
        </Link>
        <Link to='/' className="link" style={{textDecoration:"none"}}>
          <HomeOutlinedIcon style={{width:"22px"}}/>
        </Link>
        {darkMode?<WbSunnyOutlinedIcon style={{width:"22px",cursor:"pointer"}} onClick={toggle}/>:<DarkModeOutlinedIcon style={{width:"22px",cursor:"pointer"}} onClick={toggle}/>}
        <Link to='/explore' className="link" style={{textDecoration: "none"}}>
          <GridViewOutlinedIcon style={{width:"22px"}}/>
        </Link>
        <div className="search">
          <SearchOutlinedIcon style={{width:"22px"}}/>
          <input type="text" placeholder="Search.." />
        </div>
      </div>
      <div className="right">
        <Link to='/profile/2' className="link" style={{textDecoration: "none"}}>
          <PersonOutlineOutlinedIcon style={{width:"22px"}}/>
        </Link>
        <Link to='/message' className="link" style={{textDecoration: "none"}}>
          <EmailOutlinedIcon style={{width:"22px"}}/>
        </Link>
        <div className="user">
          <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
          <span>Jamie Doe</span>
        </div>
      </div>
    </div>
  )
}

export default NavBar
