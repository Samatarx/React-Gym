import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li><Link to="/Signup">Sign Up</Link></li>
        <li><Link to="/Location">Locations</Link></li>
      </ul>
    </div>
  );
}

export default Nav;
