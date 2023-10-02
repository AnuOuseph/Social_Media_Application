import { Link } from "react-router-dom"
import "./signup.scss"

function Signup() {
  return (
    <div className="signup">
      <div className="card">
        <div className="left">
        </div>
        <div className="right">
          <h1>Ixia</h1>
          <p>Create a new account.</p>
          <form>
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button><Link to="/" style={{textDecoration:"none",color:"white"}}>Create</Link> </button>
            <p>Login to your account? <span><Link to='/login' style={{textDecoration:"none",color:"rgb(1,110,141)"}}>Login</Link></span></p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup
