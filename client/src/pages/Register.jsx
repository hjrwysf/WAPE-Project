import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Register.css'

function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState('')

  const handleRegister = (event) => {
    event.preventDefault()

    if (password !== confirmPassword) {
      setMessage('Passwords do not match.')
      return
    }

    setMessage('Registration is not connected yet.')
  }

  return (
    <div className="register-page">
      <div className="register-box">

        <div className="register-header">
          <h1>Create Account</h1>
          <p>Create an account to start exploring movies.</p>
        </div>

        <form className="register-form" onSubmit={handleRegister}>

          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              id="name"
              type="text"
              placeholder="Enter your full name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="register-email">Email</label>
            <input
              id="register-email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="register-password">Password</label>
            <input
              id="register-password"
              type="password"
              placeholder="Create a password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              id="confirm-password"
              type="password"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
              required
            />
          </div>

          {message && <p className="form-message">{message}</p>}

          <button type="submit" className="register-button">
            Register
          </button>

        </form>

        <div className="register-footer">
          <p>
            Already have an account?
            <Link to="/login" className="login-link">
              Login here
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

export default Register