import React, { Component } from "react";
import Home from "./../Home";
import Footer from "./../Footer";
import Porfile from "./../Navbar/Profile";
import Portfoilo from "./../Navbar/Portfolio";
import Work from "./../Navbar/Work";
import About from "./../About";
import SocialMedia from "./../Navbar/SocialMedia";

class All extends Component {
  render() {
    return (
      <div className="App">
        <Home />
        <Work />
        <Portfoilo />
        <Porfile />
        <About />
        <SocialMedia />
        <Footer />
      </div>
    );
  }
}

export default All;
