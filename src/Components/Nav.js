import React, { Component } from "react";
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <div>
        <body>
          <nav class="sidenav">
            <nav class="words">
              <div>
                  <Link to='/' id = 'letters' active>Home</Link>
                  <Link to='/AboutMe' id = 'letters'>About Me</Link>
                  <Link to='/Portfolio' id = 'letters'>Portfolio</Link>
                  <Link to='/ContactMe' id = 'letters'>Contact Me</Link>
              </div>
            </nav>
          </nav>
        </body>
      </div>
    );
  }
}
export default NavBar;
