import {Link, withRouter} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="nav-bar">
    <ul className="nav-items-container">
      <Link to="/" className="nav-link">
        <li>Home</li>
      </Link>
      <Link to="/about" className="nav-link">
        <li>About</li>
      </Link>
    </ul>
  </nav>
)

export default withRouter(Header)
