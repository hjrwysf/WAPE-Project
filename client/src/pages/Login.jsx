import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  const handleLogin = (event) => {
    event.preventDefault()
    setMessage('Login is not connected yet.')
  }

  return (
    <div className="login-page">
      <div className="login-box">

        <div className="login-header">
          <h1>Welcome Back</h1>
          <p>Login to continue exploring movies.</p>
        </div>

        <form className="login-form" onSubmit={handleLogin}>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </div>

          {message && <p className="form-message">{message}</p>}

          <button type="submit" className="login-button">
            Login
          </button>

        </form>

        <div className="login-footer">
          <p>
            Don't have an account?
            <Link to="/register" className="register-link">
              Register here
            </Link>
          </p>

         <Link to="/" className="back-button">
            Back to Movies
          </Link>
        </div>

      </div>
    </div>
  )
}

export default Login