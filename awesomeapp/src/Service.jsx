import React from 'react';
import Card from './Card';
import Sdata from './Sdata';
import Footer from './Footer';
const Services = (props) => {
   return (
       <>
          <div className="container-fluid">
          <div className="row">
             <div className="col-10 mx-auto">
             <div className="row">
             {
               Sdata.map((val,index) => {
                 return <Card
                     key={val.index}
                     imgsrc={val.imgsrc}
                     title={val.title}

                 />
               })
             }
            
            
             </div>
          </div>
          </div>
          </div>
          <Footer/>
       </>
   )
}
export default Services;