import './following.scss'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { createPortal } from 'react-dom';

function Following(props) {
  return createPortal(
    <>
        <div className="overlay"></div>
        <div className="popup">
            <div className="popup-inner">
                <button onClick={props.followingOpen}>X</button>
                <h2>Following</h2>
                <div className="search">
                    <SearchOutlinedIcon style={{width:"22px",color:"#555"}}/>
                    <input type="text" placeholder="Search.." />
                </div>
                <div className='content'>
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                            <span>Jamie Doe</span>
                        </div>
                        <div className="buttons">
                            <button>Unfollow</button>
                            <button>Remove</button>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                            <span>Jane Doe</span>
                        </div>
                        <div className="buttons">
                            <button>Unfollow</button>
                            <button>Remove</button>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                            <span>John Doe</span>
                        </div>
                        <div className="buttons">
                            <button>Unfollow</button>
                            <button>Remove</button>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                            <span>Jay Doe</span>
                        </div>
                        <div className="buttons">
                            <button>Unfollow</button>
                            <button>Remove</button>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                            <span>Jay Doe</span>
                        </div>
                        <div className="buttons">
                            <button>Unfollow</button>
                            <button>Remove</button>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                            <span>Jay Doe</span>
                        </div>
                        <div className="buttons">
                            <button>Unfollow</button>
                            <button>Remove</button>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                            <span>Jay Doe</span>
                        </div>
                        <div className="buttons">
                            <button>Unfollow</button>
                            <button>Remove</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>,
    document.getElementById('portal')
  )
}

export default Following

    
