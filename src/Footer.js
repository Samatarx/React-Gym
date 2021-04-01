import React from 'react'
import {Link} from 'react-router-dom'

function Footer() {
    return (
        <div>
            <ul>
        <li>
          <Link to="/AboutUs">About Us</Link>
        </li>
        <li><Link to="/Careers">Careers</Link></li>
        <li><Link to="/Terms">Terms & conditions</Link></li>
      </ul>
        </div>
    )
}

export default Footer
