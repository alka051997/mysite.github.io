import React from 'react'; 
import Common from './Common';
import Footer from './Footer';
import Img from '../src/Img/1.jpg';
const Home = () => {
   return (
      <>
        <Common name='Grow Your Business' img={Img} visit='/Services' btname="Get Started" />
        <Footer/>
      </>
  )
}
export default Home;