import React, { Component } from "react";
import '../Style/formStyle.css';
import ContSend from '../Components/ContSend';

class ContactMe extends Component {

  render() {
    return (
      <div id='contactBack'>
        <form id='field'>
            <input id="nameForm" type='text' placeholder="Name" />
            <input id="emailForm" type='text' placeholder="Email" /><br/>
            <input id='subjectForm' type='text' placeholder='Subject'/><br/>
            <input id='messageForm' type='text' placeholder='Message'/><br/>
        </form>
        <div id='hold'>Pic maybe, idk</div>

      <ContSend/>

      </div>
    );
  }
}
export default ContactMe;
