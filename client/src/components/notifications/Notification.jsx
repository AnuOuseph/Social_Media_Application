import './notification.scss'
import { createPortal } from 'react-dom';

function Notification(props) {
  return createPortal(
    <>
        <div className="overlay"></div>
        <div className="popup">
            <div className="popup-inner">
                <button onClick={props.notification}>X</button>
                <h2>Notifications</h2>
                <div className='content'>
                    <span className='date'>Today</span>
                    <div className="user">
                        <div className="userInfo">
                        <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                        <p>
                        <span>Jamie Doe</span> Changed Profile Picture
                        </p>
                        </div>
                        <span>1 min ago</span>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                        <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                        <p>
                        <span>Jamie Doe</span> Changed Profile Picture
                        </p>
                        </div>
                        <span>1 min ago</span>
                    </div>
                    <hr />
                    <span className='date'>This Week</span>
                    <div className="user">
                        <div className="userInfo">
                        <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                        <p>
                        <span>Jamie Doe</span> Changed Profile Picture
                        </p>
                        </div>
                        <span>1 min ago</span>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                        <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                        <p>
                        <span>Jamie Doe</span> Changed Profile Picture
                        </p>
                        </div>
                        <span>1 min ago</span>
                    </div>
                    <hr />
                    <span className='date'>This Month</span>
                    <div className="user">
                        <div className="userInfo">
                        <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                        <p>
                        <span>Jamie Doe</span> Changed Profile Picture
                        </p>
                        </div>
                        <span>1 min ago</span>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                        <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                        <p>
                        <span>Jamie Doe</span> Changed Profile Picture
                        </p>
                        </div>
                        <span>1 min ago</span>
                    </div>


                </div>
            </div>
        </div>
    </>,
    document.getElementById('portal')
  )
}

export default Notification
