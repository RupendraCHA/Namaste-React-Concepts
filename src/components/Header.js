import { LOGO_URL } from "../utils/constants"

const Header = () => {
  return (
    <div className="header">
      <div>
        <img className="logo" src={LOGO_URL} alt="Website_Logo"/>
      </div>
      <div className="nav-items">
        <ul>
          <li className="listItem">Home</li>
          <li className="listItem">About</li>
          <li className="listItem">Contact</li>
          <li className="listItem">Cart</li>
          <li className="listItem">Login</li>
          <li className="listItem">SignUp</li>
        </ul>
      </div>
    </div>
  )
}

export const Footer = () => {
    return (
        <div>
            <h1>Footer</h1>
        </div>
    )
}

export default Header