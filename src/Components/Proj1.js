import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../Style/PortStyle.css";

class Proj1 extends Component {
  handleHover1 = () => {
    document.getElementById("proj2").className = "darkProj";

  };

  handleExit1 = () => {
    document.getElementById("proj2").className = 'lightProj';
  }

  handleHover2 = () => {
    document.getElementById("proj1").className = "darkProj";

  };

  handleExit2 = () => {
    document.getElementById("proj1").className = 'lightProj';
  }

  render() {
    return (
      <div>
        <Link to="/">
          <div id="proj1" class='proj1' onMouseEnter={this.handleHover1} onMouseLeave={this.handleExit1} />
        </Link>
        <div id="proj2" onMouseEnter={this.handleHover2} onMouseLeave={this.handleExit2}/>
        {/* <div id='proj3'>Proj3</div> */}
        {/* <div id='proj4'>Proj4</div> */}
      </div>
    );
  }
}
export default Proj1;
