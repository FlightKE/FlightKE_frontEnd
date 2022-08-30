import React, {Component} from 'react';
import Video from "./video.mp4";
import {Link} from 'react-router-dom';



function Navbar() {

  
    return(

      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"> <Link to="/" className = "navbar-brand"> <video width="25%" height="25%" preload="auto">
      <source src={Video} type="video/mp4" />
      Your browser does not support HTML5 video.
      </video></Link></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="ml-auto">
    <div class="collapse navbar-collapse " id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="#">Home</a>
        <a class="nav-link" href="#">Profile</a>
        <a class="nav-link" href="#">Products</a>
        <a class="nav-link disabled">Sign In</a>
      </div>
      </div>
    </div>
  </div>
</nav>
      // <nav className="navbar navbar-secondary bg-secondary .text-primary navbar-expand-lg">
      //   <Link to="/" className = "navbar-brand"> <video width="25%" height="25%" preload="auto">
      //   <source src={Video} type="video/mp4" />
      //   Your browser does not support HTML5 video.
      // </video></Link>
      //   <div className= "collpase navbar-collapse">
      //   <ul className= "navbar-nav mr-auto">
      //      <li className="navbar-item">
      //     <Link to="/" style={{color: 'white', textDecoration: 'none'}} activeStyle={{color: 'red', textDecoration: 'none'}}>Flights</Link>
      //     </li>
      //     <li className="navbar-item">
      //     <Link to="/create" style={{color: 'white', textDecoration: 'none'}} activeStyle={{color: 'red', textDecoration: 'none'}} >Sign In</Link>
      //     </li>
      //     <li className="navbar-item">
      //     <Link to="/user" style={{color: 'white', textDecoration: 'none'}} activeStyle={{color: 'red', textDecoration: 'none'}}>My Account</Link >
      //     </li>
      //   </ul>
      //   </div>
      //   </nav>

        
    );
  }

export default Navbar;