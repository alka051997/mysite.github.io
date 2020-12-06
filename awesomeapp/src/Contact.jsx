import React from 'react';
import Footer from './Footer';
const Contact = () =>{
   return (
       <>
          <div className='container-fluid'>
              <div className='col-10 mx-auto'>
                  <div className='row'>
                  <form className='mx-auto form_box'>

  <div class="form-outline mb-4 ">
    <input type="text" id="form4Example1" class="form-control" placeholder='Name'/>
   
  </div>

  <div class="form-outline mb-4">
    <input type="email" id="form4Example2" class="form-control" placeholder='Email address' />
  
  </div>

  <div class="form-outline mb-4">
    <textarea class="form-control" id="form4Example3" rows="4" placeholder='Message'></textarea>
    
  </div>


  <div class="form-check d-flex justify-content-center mb-4">
    <input
      class="form-check-input mr-2"
      type="checkbox"
      value=""
      id="form4Example4"
      checked
    />
    <label class="form-check-label" for="form4Example4">
      Send me a copy of this message
    </label>
  </div>

 
  <button type="submit" class="btn btn-primary btn-block mb-4">
    Send
  </button>
</form>
                  </div>
              </div>
          </div>
          <Footer/>
       </>
   );
}
export default Contact;