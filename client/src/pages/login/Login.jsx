import { Link } from "react-router-dom"
import "./login.scss"
import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"

function Login() {
  const {login} = useContext(AuthContext)
  const handleLogin = () =>{
    login()
  }
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <span>Create an Account?</span>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Logo</h1>
          <p>Sign in to your account.</p>
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button onClick={handleLogin()}>Sign In</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
