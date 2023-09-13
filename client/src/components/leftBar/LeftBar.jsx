import "./leftBar.scss"
import Friends from "../../assets/friend.png"
import Groups from "../../assets/2.png"
import Gallery from "../../assets/8.png"
import Videos from "../../assets/9.png"
import Messages from "../../assets/10.png"
import { useContext, useState } from "react"
import { AuthContext } from "../../context/AuthContext"
import Create from "../create/Create"
import Followers from "../../components/followers/followers"
import Following from "../following/Following"

function LeftBar() {
  const [seen, setSeen] = useState(false)
  const [open, setOpen] = useState(false)
  const [followOpen, setFollowOpen] = useState(false)

    function FollowersOpen () {
      setOpen(!open)
    }
    function FollowingOpen () {
      setFollowOpen(!followOpen)
    }

    function togglePop () {
        setSeen(!seen);
    }
  const {currentUser} = useContext(AuthContext)
  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img src={currentUser.profilePic} alt="" />
            <span>Profile</span>
          </div>
          <div className="item">
            <img src={Friends} alt="" />
            <span onClick={FollowersOpen}>Followers</span>
            {open ? <Followers followersOpen={FollowersOpen} /> : null}
          </div>
          <div className="item">
            <img src={Friends} alt="" />
            <span onClick={FollowingOpen}>Following</span>
            {followOpen ? <Following followingOpen={FollowingOpen} /> : null}
          </div>
          <div className="item">
            <img src={Groups} alt="" />
            <span>Explore</span>
          </div>
          <div className="item">
            <img src={Gallery} alt="" />
            <span>Messages</span>
          </div>
          <div className="item">
            <img src={Videos} alt="" />
            <span>Notifications</span>
          </div>
          <div className="item">
            <img src={Messages} alt="" />
            <span onClick={togglePop}>Create</span>
            {seen ? <Create toggle={togglePop} /> : null}
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Shortcuts</span>
          <div className="item">
            <img src={Friends} alt="" />
            <span>Friends</span>
          </div>
          <div className="item">
            <img src={Groups} alt="" />
            <span>Groups</span>
          </div>
          <div className="item">
            <img src={Gallery} alt="" />
            <span>Gallery</span>
          </div>
          <div className="item">
            <img src={Videos} alt="" />
            <span>Videos</span>
          </div>
          <div className="item">
            <img src={Messages} alt="" />
            <span>Messages</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeftBar
