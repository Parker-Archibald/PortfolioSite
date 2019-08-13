import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <div>
        <body>
          <nav class="sidenav">
            <nav class="words">
              <div>
                <link
                  rel="stylesheet"
                  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
                />
                <Link to="/" id="letters" className='home' active>Home
                  <i href="#" class="fa fa-home" />
                </Link>
                <Link to="/AboutMe" id="letters">
                  About Me
                </Link>
                <Link to="/Portfolio" id="letters">
                  Portfolio
                </Link>
                <Link to="/ContactMe" id="letters">
                  Contact Me
                </Link>
              </div>
            </nav>
          </nav>
        </body>
      </div>
    );
  }
}
export default NavBar;
