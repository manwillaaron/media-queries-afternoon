import React, { Component } from "react";
import logo from "./logo.svg";
import "./reset.css";
import "./App.css";

class App extends Component {

  setScrollHeight= (value) => {
    
    window.scrollTo(+value, +value)
    console.log(value);
  }
  render() {
    return (
      <div className="App">
        <div className="nav-container">
          <nav className="nav">
            <span className="title">Start Bootstrap</span>
            <p class="nav-link js-scroll-trigger" className="nav-links">SERVICES</p>
            <p className="nav-links">PORTFOLIO</p>
            <p className="nav-links">ABOUT</p>
            <p className="nav-links">TEAM</p>
            <p className="nav-links">CONTACT</p>
            <button className="menu-bars">menu</button>
          </nav>

          <div className="welcome-container">
            <p className='welcome1'>welcome to Our Studio!</p>
            <p className= 'welcome2'>IT'S NICE TO MEET YOU</p>
            <button value='800' onClick= {()=> this.setScrollHeight()} className="tell-more">TELL ME MORE</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
