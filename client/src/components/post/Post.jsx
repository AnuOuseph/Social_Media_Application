/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import './post.scss'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import BookmarkOutlinedIcon from '@mui/icons-material/BookmarkOutlined';
import { Link } from '@mui/material';

function Post({post}) {
    const liked = true;
  return (
    <div className='post'>
      <div className="container">
        <div className="user">
            <div className="userInfo">
                <img src={post.profilePic} alt="" />
                <div className="details">
                    <Link to={`/profile/${post.userId}`} style={{textDecoration:'none',color:"inherit"}}>
                        <span className='name'>{post.name}</span>
                    </Link>
                        <span className='time'>1 min ago</span>
                </div>
            </div>
            <MoreHorizOutlinedIcon/>
        </div>
        <div className="content">
            <p>{post.desc}</p>
            <img src={post.img} alt="" />
        </div>
        <div className="interaction">
            <div className="item">
                {liked?<FavoriteOutlinedIcon/>:<FavoriteBorderOutlinedIcon/>}
                12 Likes
            </div>
            <div className="item">
                <TextsmsOutlinedIcon/>
                6 Comments
            </div>
            <div className="item">
                <ShareOutlinedIcon/>
                Share
            </div>
        </div>
      </div>
    </div>
  )
}

export default Post
