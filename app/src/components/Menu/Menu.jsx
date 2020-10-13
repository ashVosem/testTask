import React from "react"

import dots from '../../assets/images/dots.svg'
import logo from '../../assets/images/logo.svg'

const Menu = () => {
 return <div className="menu">
   <img src={logo} alt="logo" className="menu_logo"/>
   <input id="burger" type="checkbox"/>
   <label for="burger" className="menu_dots">
     <img src={dots} alt="dots"/>
   </label>
   <nav>
     <ul>
     <li>a</li>
     <li>b</li>
     <li>c</li>
     <li>d</li>
     </ul>
   </nav>
 </div>
}
export default Menu;