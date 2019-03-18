import React from 'react';
import { Link } from "react-router-dom";

const Header = (props) => (
    <nav className="navbar navbar-default myheader">
    <div className="inner-bound">
  <div className="container-fluid">
    <div className="navbar-header">
    <Link to="/"><span className="navbar-brand" ><i className="fab fa-fort-awesome"></i> Classify</span></Link>
    </div>
    <ul className="nav navbar-nav navbar-right">
           
            <li>
              <Link to="/#"><i className="fas fa-info-circle"></i> About us</Link>
            </li>
            <li>
              <Link to="/#"><i className="fas fa-user"></i>{props.name}</Link>
            </li>
          </ul>
          </div>
  </div>
</nav>
  );

export default Header;
