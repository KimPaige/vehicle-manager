import React, { Component } from 'react';
import logo from './logo.svg';
import Motorbike from './Motorbike.jpg';
import './App.css';

class App extends Component {
  render() {
    return (

      //Header
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Vehicle Manager Home</h1>
        </header>

       <p className="App-intro">
          This page will contain table with information pertaining to different vehicles.
        </p>

       {/* Table */}
      <table className="App-table">
      <tbody>
         <tr id="row0">
           <td id="cell0-0" width="30%">
           <a href="Page2.js"><img src={Motorbike} alt="Motorbike" width="99%"></img></a></td>
           <td id="cell0-1">Honda CB125E Motorbike</td>
         </tr>
       </tbody>
     </table>
      </div>
    );
  }
}

// function myFunction() {
//   var x = document.getElementById("NavBar");
//   if (x.className === "NavBar") {
//       x.className += " responsive";
//   } else {
//       x.className = "NavBar";
//   }
// }

export default App;
