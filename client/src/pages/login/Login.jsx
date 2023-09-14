import { Link } from "react-router-dom"
import "./login.scss"
import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"
import GoogleIcon from '@mui/icons-material/Google';

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
          <h1>Ixia</h1>
          <p>Sign in to your account.</p>
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button onClick={handleLogin()}><Link to='/' style={{textDecoration:"none",color:"white"}}>Login</Link></button>
          </form>
          <p>or</p>
          <button><GoogleIcon style={{paddingRight:"5px", fontSize:"small"}}/> Sign in with Google</button>
        </div>
      </div>
    </div>
  )
}

export default Login
