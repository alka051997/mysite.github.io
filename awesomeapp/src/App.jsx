import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import  index from './index.css';
import {Switch, Route, Redirect } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Service from './Service';
import Contact from './Contact';
import Navbar from './Navbar';


const App =() =>{
  return (
    <>
     <Navbar/>
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/About' component={About}/>
        <Route exact path='/Service' component={Service}/>
        <Route exact path='/Contact' component={Contact}/>
        <Redirect to='/' />
       </Switch>
    </>
  );
};
export default App;