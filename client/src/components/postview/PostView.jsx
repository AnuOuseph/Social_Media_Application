import { Link } from 'react-router-dom'
import './postview.scss'
import { createPortal } from 'react-dom'
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import FavoriteOutlined from '@mui/icons-material/FavoriteOutlined';
import FavoriteBorderOutlined from '@mui/icons-material/FavoriteBorderOutlined';
import TextsmsOutlined from '@mui/icons-material/TextsmsOutlined';
import ShareOutlined from '@mui/icons-material/ShareOutlined';
import BookmarkBorderOutlined from '@mui/icons-material/BookmarkBorderOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

function PostView(props) {
  return createPortal(
    <>
        <div className="overlay"></div>
        <div className="popup1">
            <div className="popup-inner1">
                <button onClick={props.viewPost}>X</button>
                <div className="content1">
                    <div className="leftView">
                        <img src={props.img} alt="" />
                    </div>
                    <div className="rightView1">
                        <div className="user">
                            <div className="userInfo">
                                <img src={props.img} style={{width:"30px",height:"30px"}} alt="" />
                                <div className="details1">
                                    <Link to={`/profile/2`} style={{textDecoration:'none',color:"inherit"}}>
                                        <span className='name'>Jane Doe {props.id}</span>
                                    </Link>
                                    <p>Do your best....</p>
                                </div>
                            </div>
                            <MoreHorizOutlinedIcon/>
                        </div>
                        <hr />
                        <div className='comment'>
                            <div className="user1">
                                <div className="userInfo1">
                                    <img src="https://images.unsplash.com/photo-1687360440984-3a0d7cfde903?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80" alt="" />
                                    <div className="details1">
                                        <Link to={`/profile/2`} style={{textDecoration:'none',color:"inherit"}}>
                                            <span className='name1'>Jane Doe</span>
                                        </Link>
                                        <p>Enjoy every seconds....</p>
                                    </div>
                                    <FavoriteOutlined className='icon1' style={{width:"12px", color:"red"}}/>
                                </div>
                            </div>
                            <div className="user1">
                                <div className="userInfo1">
                                    <img src="https://images.unsplash.com/photo-1687360440984-3a0d7cfde903?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80" alt="" />
                                    <div className="details1">
                                        <Link to={`/profile/2`} style={{textDecoration:'none',color:"inherit"}}>
                                            <span className='name1'>Jane Doe</span>
                                        </Link>
                                        <p>Enjoy every seconds....</p>
                                    </div>
                                    <FavoriteOutlined className='icon1' style={{width:"12px", color:"red"}}/>
                                </div>
                            </div>
                            <div className="user1">
                                <div className="userInfo1">
                                    <img src="https://images.unsplash.com/photo-1687360440984-3a0d7cfde903?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80" alt="" />
                                    <div className="details1">
                                        <Link to={`/profile/2`} style={{textDecoration:'none',color:"inherit"}}>
                                            <span className='name1'>Jane Doe</span>
                                        </Link>
                                        <p>Enjoy every seconds....</p>
                                    </div>
                                    <FavoriteOutlined className='icon1' style={{width:"12px", color:"red"}}/>
                                </div>
                            </div>
                            <div className="user1">
                                <div className="userInfo1">
                                    <img src="https://images.unsplash.com/photo-1687360440984-3a0d7cfde903?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80" alt="" />
                                    <div className="details1">
                                        <Link to={`/profile/2`} style={{textDecoration:'none',color:"inherit"}}>
                                            <span className='name1'>Jane Doe</span>
                                        </Link>
                                        <p>Enjoy every seconds....</p>
                                    </div>
                                    <FavoriteOutlined className='icon1' style={{width:"12px", color:"red"}}/>
                                </div>
                            </div>
                            <div className="user1">
                                <div className="userInfo1">
                                    <img src="https://images.unsplash.com/photo-1687360440984-3a0d7cfde903?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80" alt="" />
                                    <div className="details1">
                                        <Link to={`/profile/2`} style={{textDecoration:'none',color:"inherit"}}>
                                            <span className='name1'>Jane Doe</span>
                                        </Link>
                                        <p>Enjoy every seconds....</p>
                                    </div>
                                    <FavoriteOutlined className='icon1' style={{width:"12px", color:"red"}}/>
                                </div>
                            </div>
                            <div className="user1">
                                <div className="userInfo1">
                                    <img src="https://images.unsplash.com/photo-1687360440984-3a0d7cfde903?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80" alt="" />
                                    <div className="details1">
                                        <Link to={`/profile/2`} style={{textDecoration:'none',color:"inherit"}}>
                                            <span className='name1'>Jane Doe</span>
                                        </Link>
                                        <p>Enjoy every seconds....</p>
                                    </div>
                                    <FavoriteOutlined className='icon1' style={{width:"12px", color:"red"}}/>
                                </div>
                            </div>
                            <div className="user1">
                                <div className="userInfo1">
                                    <img src="https://images.unsplash.com/photo-1687360440984-3a0d7cfde903?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80" alt="" />
                                    <div className="details1">
                                        <Link to={`/profile/2`} style={{textDecoration:'none',color:"inherit"}}>
                                            <span className='name1'>Jane Doe</span>
                                        </Link>
                                        <p>Enjoy every seconds....</p>
                                    </div>
                                    <FavoriteOutlined className='icon1' style={{width:"12px", color:"red"}}/>
                                </div>
                            </div>
                        </div>
                        <div className="bottom">
                            <div className="top">
                                <div className="top-left">
                                    <FavoriteBorderOutlined />
                                    <TextsmsOutlined/>
                                    <ShareOutlined/>
                                </div>
                                <BookmarkBorderOutlined/>
                            </div>
                            <div className='text1'>
                                <input type="text" placeholder='write something..' />
                                <div className='send'><SendOutlinedIcon style={{width:"16px",color:"white"}}/> </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>,
    document.getElementById('portal')
  )
}

export default PostView
