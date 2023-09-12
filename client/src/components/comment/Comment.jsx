import { useContext } from "react"
import {AuthContext} from '../../context/AuthContext'
import "./comment.scss"

function Comment() {
    const {currentUser} = useContext(AuthContext)
    const comments = [
        {
            id:1,
            name:"Jamie Doe",
            userId:1,
            profilePic:"https://images.unsplash.com/photo-1687360440984-3a0d7cfde903?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
            desc:"Travel Around",
        },
        {
            id:2,
            name:"Jane Doe",
            userId:2,
            profilePic:"https://images.unsplash.com/photo-1687360440984-3a0d7cfde903?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
            desc:"Happy Halloweeen",
        },         
    ]
  return (
    <div className="comments">
        <div className="text">
            <img src={currentUser.profilePic} alt="" />
            <input type="text" placeholder="Write Something.."/>
            <button>Send</button>
        </div>
      {comments.map((comment)=>(
        <div className="comment" key={comment.id}>
            <img src={comment.profilePic} alt="" />
            <div className="info">
                <span>{comment.name}</span>
                <p>{comment.desc}</p>
            </div>
            <span className="date">1 min ago</span>
        </div>
      ))}
    </div>
  )
}

export default Comment
