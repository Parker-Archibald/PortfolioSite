import React, { Component } from "react";
import "../Style/NavStyles.css";
import ContactMe from "../Components/ContactMe";
import "../Style/ContactMe.css";

class ContactMePage extends Component {
  render() {
    return (
      <body>
        <div>
          <p>
            Contact Me
            <ContactMe />
          </p>
        </div>
      </body>
    );
  }
}
export default ContactMePage;
