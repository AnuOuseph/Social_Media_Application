import { Link } from "react-router-dom"
import "./signup.scss"

function Signup() {
  return (
    <div className="signup">
      <div className="card">
        <div className="left">
          <span>Not a user?</span>
          <Link to="/login">
            <button>Sign In</button>
          </Link>
        </div>
        <div className="right">
          <h1>Ixia</h1>
          <p>Create a new account.</p>
          <form>
            <input type="text" placeholder="Username" />
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <Link to='/' style={{textDecoration:"none",color:"white"}}>Login</Link>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup
