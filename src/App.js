import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App-header">

                
      <div align="center">
       <h1>Asim Tech &reg;</h1> 
       <input  type="search" placeholder="Search ..."/>
       <input  type="submit" value="search"/>    
       </div>
       <hr/>
<center>        
<span className= "App-link"> 
       <a href="#about">Home</a> |
    
       <a href="#portfolio">Services</a> |
     
       <a href="#contact">Contact</a>  |

       <a href="#contact">About Us</a>

    
  </span>
</center>
<hr/>
</div>
    );
  }
}

export default App;
