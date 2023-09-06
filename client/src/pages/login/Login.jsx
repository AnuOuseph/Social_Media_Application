import "./login.scss"

function Login() {
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <span>Create an Account?</span>
          <button>Register</button>
        </div>
        <div className="right">
          <h1>Logo</h1>
          <p>Sign in to your account.</p>
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button>Sign In</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
