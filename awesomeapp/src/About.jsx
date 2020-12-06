import React from 'react'; 
import Common from './Common';
import Footer from './Footer';
import Img from '../src/Img/2.jpg';
const About = () => {
   return (
      <>
        <Common name='About Us' img={Img} visit='/Services' btname="Get Started" />
        <Footer/>
      </>
  )
}
export default About;