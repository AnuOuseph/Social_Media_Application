import "./leftBar.scss"
import { useState } from "react"
import Create from "../create/Create"
import Notification from "../notifications/Notification"
import Followers from "../../components/followers/followers"
import Following from "../following/Following"
import { Link } from "react-router-dom"
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

function LeftBar() {
  const [seen, setSeen] = useState(false)
  const [open, setOpen] = useState(false)
  const [followOpen, setFollowOpen] = useState(false)
  const [notification, setNotification] = useState(false)

    function FollowersOpen () {
      setOpen(!open)
    }
    function FollowingOpen () {
      setFollowOpen(!followOpen)
    }
    function NotificationOpen () {
      setNotification(!notification)
    }

    function togglePop () {
        setSeen(!seen);
    }
  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            <Link to="/profile/2" style={{textDecoration:"none"}}>
              <span>Profile</span>
            </Link>
          </div>
          <div className="item">
            <PeopleAltOutlinedIcon/>
            <span onClick={FollowersOpen}>Followers</span>
            {open ? <Followers followersOpen={FollowersOpen} /> : null}
          </div>
          <div className="item">
            <PeopleAltOutlinedIcon/>
            <span onClick={FollowingOpen}>Following</span>
            {followOpen ? <Following followingOpen={FollowingOpen} /> : null}
          </div>
          <div className="item">
            <ExploreOutlinedIcon/>
            <Link to='/explore' style={{textDecoration: "none"}}>
              <span>Explore</span>
            </Link>
          </div>
          <div className="item">
            <EmailOutlinedIcon/>
            <Link to='/message' style={{textDecoration: "none"}}>
              <span>Messages</span>
            </Link>
          </div>
          <div className="item">
            <NotificationsActiveOutlinedIcon/>
            <span onClick={NotificationOpen}>Notifications</span>
            {notification ? <Notification notification={NotificationOpen} /> : null}
          </div>
          <div className="item">
            <AddCircleOutlineOutlinedIcon/>
            <span onClick={togglePop}>Create</span>
            {seen ? <Create toggle={togglePop} /> : null}
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Shortcuts</span>
          <div className="item">
            <BookmarkBorderOutlinedIcon/>
            <span>Saved</span>
          </div>
          <div className="item">
            <SettingsOutlinedIcon/>
            <span>Settings</span>
          </div>
          <div className="item">
            <LogoutOutlinedIcon/>
            <Link to="/login" style={{textDecoration: "none"}}>
              <span>Logout</span>
            </Link>
          </div>
        </div>
        <div className="menubar">
          <MenuOutlinedIcon/>
          <span>More</span>
        </div>
      </div>
    </div>
  )
}

export default LeftBar
