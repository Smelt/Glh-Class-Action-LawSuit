import React from 'react';
import Header from '../components/header.component';
import { Link } from 'react-router-dom';
const Landing = () => (
  <div>
    <Header name={" Login"}/>
    <div className="landing-container" >
      <div className="signup-container">
        <h1><i className="fab fa-fort-awesome"></i>  Classify</h1>
  <br/>
        <div class="input-group">

    <input type="text" class="form-control" placeholder="First Name" aria-describedby="basic-addon1"/>
    <input type="text" class="form-control" placeholder="Last Name" aria-describedby="basic-addon1"/>
    <input type="text" class="form-control" placeholder="Phone Number" aria-describedby="basic-addon1"/>
    <input type="text" class="form-control" placeholder="Email" aria-describedby="basic-addon1"/>
    <input type="text" class="form-control" placeholder="Address 1" aria-describedby="basic-addon1"/>
    <input type="text" class="form-control" placeholder="Address 2" aria-describedby="basic-addon1"/>
    <input type="text" class="form-control" placeholder="State" aria-describedby="basic-addon1"/>
    <input type="text" class="form-control" placeholder="ZipCode" aria-describedby="basic-addon1"/>
    <br/>
    <Link to="/Api">
      <button id="sign-up" type="button"><i class="fas fa-user-plus"></i> Sign Up</button>
    </Link>
</div>
      </div>
    </div>
  </div>
);

export default Landing;
