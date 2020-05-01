import React from "react";
import {NavLink} from "react-router-dom";
 class Header extends  React.Component{
   render() {
     return (
   <nav>
    <div class="nav-wrapper">
      <a href="#" class="brand-logo">elmar gebre</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
     <li> <NavLink to="/home">Home</NavLink> </li>
          <li> <NavLink to="/add">addPost</NavLink> </li>
       <li> <NavLink to="/setting">Setiing</NavLink></li>
      </ul>
    </div>
  </nav>
  );
   }
  
}

export default Header;
