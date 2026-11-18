import { useState } from 'react'
import './Register.css'

function Register({ goToPage }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleRegister = (event) => {
    event.preventDefault()

    if (password !== confirmPassword) {
      alert('Passwords do not match.')
      return
    }

    alert('Registration is not connected yet.')
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

          <button type="submit" className="register-button">
            Register
          </button>

        </form>

        <div className="register-footer">
          <p>
            Already have an account?

            <button
              type="button"
              className="login-link"
              onClick={() => goToPage('login')}
            >
              Login
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

export default Register