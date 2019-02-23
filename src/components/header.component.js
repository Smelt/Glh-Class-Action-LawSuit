import React from 'react';
import { Link } from "react-router-dom";

const Header = () => (
    <nav className="navbar navbar-default">
  <div className="container-fluid">
    <div className="navbar-header">
        <a class="navbar-brand" href="#"><i class="fab fa-fort-awesome"></i> Classify</a>
    </div>
    <ul className="nav navbar-nav navbar-right">
           
            <li>
              <Link to="/distance"><i class="fas fa-info-circle"></i> About us</Link>
            </li>
            <li>
              <Link to="/signin"><i class="fas fa-user"></i> Sign Up</Link>
            </li>
          </ul>
  </div>
</nav>
  );

export default Header;
