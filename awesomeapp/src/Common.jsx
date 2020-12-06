import React from 'react';
const Common = (props) => {
    return (
        <>
        <div className='container-fluid nav_bg'>
        <div className='row'>
           <div className='col-10 mx-auto'>
           <div className='row'>
               <div className='col-md-6  pt-5 order-1'>
                 <h1 class="heading">{props.name}</h1>
                 <p className="my-3 para">
Almost before we knew it, we had left the ground.

Almost before we knew it, we had left the ground.

Almost before we knew it, we had left the ground.

Almost before we knew it, we had left the ground.

Almost before we knew it, we had left the ground.

Almost before we knew it, we had left the ground.

Almost before we knew it, we had left the ground.

Almost before we knew it, we had left the ground.
Almost before we knew it, we had left the ground.

Almost before we knew it, we had left the ground.

Almost before we knew it, we had left the ground.

Almost before we knew it, we had left the ground.

Almost before we knew it, we had left the ground.

Almost before we knew it, we had left the ground.

Almost before we knew it, we had left the ground.

Almost before we knew it, we had left the ground.
</p>
<a className='btn_get_started' href={props.visit}>{props.btname}</a>
           </div>
           <div className='col-6 pt-5'>
              <img src={props.img} className='img-fluid animated' alt='img' className='img_size'/>
           </div>
           </div>
           </div>
        </div>
        </div>
        </>
    )

}
export default Common;