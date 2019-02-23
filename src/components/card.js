import React from 'react';


const Card = (props) => (
    <nav className="navbar navbar-default myheader">
    <div className="inner-bound">
  <div className="container-fluid">
    <div className="navbar-header">
    <Link to="/"><a class="navbar-brand" href=""><i class="fab fa-fort-awesome"></i> Classify</a></Link>
    </div>
    <ul className="nav navbar-nav navbar-right">
           
            <li>
              <Link to="/distance"><i class="fas fa-info-circle"></i> About us</Link>
            </li>
            <li>
              <Link to="/signin"><i class="fas fa-user"></i>{props.name}</Link>
            </li>
          </ul>
          </div>
  </div>
</nav>
  );

export default Card;
