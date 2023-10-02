import { Link } from "react-router-dom"
import "./login.scss"
import GoogleIcon from '@mui/icons-material/Google';

function Login() {
  return (
    <div className="login">
      <div className="card">
        <div className="left">
        </div>
        <div className="right">
          <h1>Ixia</h1>
          <p>Sign in to your account.</p>
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button><Link to='/' style={{textDecoration:"none",color:"white"}}>Login</Link></button>
          </form>
          <p>or</p>
          <button><GoogleIcon style={{paddingRight:"5px", fontSize:"small"}}/><Link to="/" style={{textDecoration:"none", color:"rgb(1,110,141)"}}> Sign in with Google</Link> </button>
          <p>Create your account? <span><Link to='/register' style={{textDecoration:"none",color:"rgb(1,110,141)"}}>Create</Link></span></p>
        </div>
      </div>
    </div>
  )
}

export default Login
