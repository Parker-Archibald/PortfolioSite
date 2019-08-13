import React, { Component } from "react";
import NavBar from "../Components/Nav";
import "../Style/NavStyles.css";
import ContactMe from "../Components/ContactMe";
import Social from "../Components/Social";
import "../Style/ContactMe.css";

class ContactMePage extends Component {
  render() {
    return (
      <body>
        <div>
          <p>
            Contact Me
            <ContactMe />
            <Social />
          </p>
        </div>
      </body>
    );
  }
}
export default ContactMePage;
