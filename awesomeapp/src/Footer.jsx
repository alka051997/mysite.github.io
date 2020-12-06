import React from 'react';
import { NavLink } from 'react-router-dom';
const Footer = () => {
 return(
     <>
         <div className="container-fluid">
             <div className='col-10 mx-auto'>
                 <div className='row'>
                    <ul className="navbar-nav mr-auto footer_width">
      <li className="nav-item active">
        <NavLink activeClassName="myactivelink" exact className="nav-link" to="/">Privacy <span className="sr-only">(current)</span></NavLink>
      </li>
      <li className="nav-item active">
        <NavLink activeClassName="myactivelink" exact className="nav-link" to="/"> | <span className="sr-only">(current)</span></NavLink>
      </li>
      <li className="nav-item">
        <NavLink activeClassName="myactivelink" exact className="nav-link" to="/">Terms & Condition</NavLink>
      </li>
      <li className="nav-item active">
        <NavLink activeClassName="myactivelink" exact className="nav-link" to="/"> | <span className="sr-only">(current)</span></NavLink>
      </li>
      <li className="nav-item">
        <NavLink activeClassName="myactivelink" exact className="nav-link" to="/">Important Link</NavLink>
      </li>
      <li className="nav-item active">
        <NavLink activeClassName="myactivelink" exact className="nav-link" to="/"> | <span className="sr-only">(current)</span></NavLink>
      </li>
      <li className="nav-item">
        <NavLink activeClassName="myactivelink" exact className="nav-link" to="/">Career</NavLink>
      </li>
    
     
    </ul>
   
                    
                 </div>
             </div>
         </div>
     </>
 )
}
export default Footer;