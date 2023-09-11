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

function NavBar() {
  return (
    <div className="navBar">
      <div className="left">
        <Link to='/' style={{textDecoration: "none"}}>
          <span>Logo</span>
        </Link>
        <HomeOutlinedIcon/>
        <DarkModeOutlinedIcon/>
        <GridViewOutlinedIcon/>
        <div className="search">
          <SearchOutlinedIcon/>
          <input type="text" placeholder="Search.." />
        </div>
      </div>
      <div className="right">
        <PersonOutlineOutlinedIcon/>
        <NotificationsNoneOutlinedIcon/>
        <EmailOutlinedIcon/>
        <div className="user">
          <img src="" alt="" />
          <span>Jamie Doe</span>
        </div>
      </div>
    </div>
  )
}

export default NavBar
