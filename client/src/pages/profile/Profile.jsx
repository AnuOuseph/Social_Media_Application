import "./profile.scss"
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Posts from '../../components/posts/Posts'

function Profile() {
  return (
    <div className="profile">
      <div className="images">
        <img src="https://images.unsplash.com/photo-1694206078595-460a3ec27772?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="" className="cover" />
        <img src="https://images.unsplash.com/photo-1687360440886-f220f137a16c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="" className="profilePic" />
      </div>
      <div className="profileInfo">
        <div className="uInfo">
          <div className="left">
            <FacebookOutlinedIcon/>
            <LinkedInIcon/>
            <InstagramIcon/>
            <TwitterIcon/>
          </div>
          <div className="center">
            <span>Jamie Doe</span>
            <div className="info">
              <span><b>41</b> Posts</span>
              <span><b>606</b> Followers</span>
              <span><b>660</b> Following</span>
            </div>
            <button>Edit Profile</button>
          </div>
          <div className="right">
            <EmailIcon/>
            <MoreVertIcon/>
          </div>
        </div>
        <Posts/>
      </div>
    </div>
  )
}

export default Profile
