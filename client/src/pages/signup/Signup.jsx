import { Link } from "react-router-dom"
import "./signup.scss"

function Signup() {
  return (
    <div className="signup">
      <div className="card">
        <div className="left">
          <span>Do you have an account?</span>
          <Link to="/login">
            <button>Sign In</button>
          </Link>
        </div>
        <div className="right">
          <h1>Logo</h1>
          <p>Create new account.</p>
          <form>
            <input type="text" placeholder="Username" />
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Create</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup
