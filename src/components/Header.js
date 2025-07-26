import React,{ useState } from "react"
import { LOGO_URL } from "../utils/constants"

const Header = () => {

  const [btnNameReact, setBtnNameReact] = useState("Login")

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
          <button className="auth-btn" onClick={() => {
            if (btnNameReact === "Login"){
              setBtnNameReact("Logout")
            }else{
              setBtnNameReact("Login")
            }
          }}>{btnNameReact}</button>
        </ul>
      </div>
    </div>
  )
}


export default Header