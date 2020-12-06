import React from 'react';
import { NavLink } from 'react-router-dom';
const Card = (props) => {
   return (
       <>
                       <div className='col-md-4'>
                <div class="card">
  <img
    src={props.imgsrc}
    class="card-img-top"
    alt="..."
  />
  <div class="card-body">
    <h5 class="card-title">{props.title}</h5>
    <p class="card-text">
     {props.description}
    </p>
    <NavLink to="/" class="btn btn-primary">Button</NavLink>
  </div>
</div>
                </div>
       </>
   )
}
 export default Card;