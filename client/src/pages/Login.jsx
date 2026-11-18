import { useState } from 'react'
import './Login.css'

function Login({ goToPage }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (event) => {
    event.preventDefault()

    alert('Login is not connected yet.')
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

          <button type="submit" className="login-button">
            Login
          </button>

        </form>

        <div className="login-footer">
          <p>
            Don't have an account?
            <button
              type="button"
              className="register-link"
              onClick={() => goToPage('register')}
            >
              Register
            </button>
          </p>

          <button
            type="button"
            className="back-button"
            onClick={() => goToPage('home')}
          >
            Back to Movies
          </button>
        </div>

      </div>
    </div>
  )
}

export default Login