import React from 'react';
import { NavLink } from 'react-router-dom';
import Img from '../src/Img/logo.jpg';

const Navbar = () => {
	return (
    <>
    <div className='container-fluid nav_bg'>
        <div className='row'>
           <div className='col-10 mx-auto'>
              <nav className="navbar navbar-expand-lg navbar-light bg-light top_header">
                  <NavLink activeClassName="myactivelink" exact className="navbar-brand" to="/"><img className='logo_img' src={Img}/></NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <NavLink activeClassName="myactivelink" exact className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
      </li>
      <li className="nav-item">
        <NavLink activeClassName="myactivelink" exact className="nav-link" to="/About">About</NavLink>
      </li>
      <li className="nav-item">
        <NavLink activeClassName="myactivelink" exact className="nav-link" to="/Service">Services</NavLink>
      </li>
      <li className="nav-item">
        <NavLink activeClassName="myactivelink" exact className="nav-link" to="/Contact">Contact</NavLink>
      </li>
    
     
    </ul>
   
  </div>
</nav>
</div>
 </div>
    </div>
</>
	)
}
export default Navbar;