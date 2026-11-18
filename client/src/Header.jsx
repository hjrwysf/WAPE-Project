import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
      <h1>Movie App</h1>

      <nav>
        <ul>
          <li>
            <Link to="/">Movies</Link>
          </li>

          <li>
            <Link to="/about">About</Link>
          </li>

          <li>
            <Link to="/login">Login</Link>
          </li>

          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header