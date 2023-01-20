// Write your JS code here
import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

import './index.css'

const LogoutButton = props => {
  const onLogout = () => {
    const {history} = props

    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <div className="btn-container">
      <button type="button" onClick={onLogout}>
        Logout
      </button>
    </div>
  )
}
export default withRouter(LogoutButton)
