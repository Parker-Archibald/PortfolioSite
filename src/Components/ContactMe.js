import React, { Component } from "react";
import '../Style/formStyle.css';

class ContactMe extends Component {
  render() {
    return (
      <div>
        <form id='field'>
            <input id="nameForm" type='text' placeholder="Name" />
            <input id="emailForm" type='text' placeholder="Email" />
            <input id='subjectForm' type='text' placeholder='Subject'/>
            <input id='messageForm' type='text' placeholder='Message'/>
            <button type='submit'>Send</button>
        </form>
      </div>
    );
  }
}
export default ContactMe;
