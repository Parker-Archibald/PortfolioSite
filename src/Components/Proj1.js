import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../Style/PortStyle.css";

class Proj1 extends Component {
  handleHover1 = () => {
    document.getElementById("proj2").className = "darkProj";
  };

  handleExit1 = () => {
    document.getElementById("proj2").className = "lightProj";
  };

  handleHover2 = () => {
    document.getElementById("proj1").className = "darkProj";
  };

  handleExit2 = () => {
    document.getElementById("proj1").className = "lightProj";
  };

  handleProj1 = e => {
    e.preventDefault();
    window.location.href = "http://localhost:3000/";
  };

  handleProj2 = e => {
    e.preventDefault();
    window.location.href = "https://fashionyourimage-ui.herokuapp.com/";
  };

  render() {
    return (
      <div>
        <div id="portTitle">My Recent Projects</div>
        <div
          id="proj1"
          class="proj1"
          onMouseEnter={this.handleHover1}
          onMouseLeave={this.handleExit1}
          onClick={this.handleProj1}
        />
        <div
          id="proj2"
          onMouseEnter={this.handleHover2}
          onMouseLeave={this.handleExit2}
          onClick={this.handleProj2}
        />
      </div>
    );
  }
}
export default Proj1;
