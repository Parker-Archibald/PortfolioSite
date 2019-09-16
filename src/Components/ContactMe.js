import React, { Component } from "react";
import "../Style/formStyle.css";
import ContSend from "../Components/ContSend";
import * as emailjs from 'emailjs-com';
import '../Style/SendBtn.css';

class ContactMe extends Component {

    state = {
      from_name: "",
      from_email: "",
      to_name: "parkerarchibald97@gmail.com",
      message_html: "",
      service_id: "gmail",
      template_id: "template_Ez0QEckY"
    }

  handleChange = ({target}) => {
    this.setState({[target.name]: target.value})
  }

  ani = async (timeoutPeriod) => {
    const { service_id, template_id, ...emailInfo } = this.state;
    emailjs.send(
      this.state.service_id,
      this.state.template_id,
      emailInfo,
      "user_XnnebP641sPgMNW5SbCgl"
    ).then(document.getElementById("plane").className = "animation")
    .then(document.getElementById("bg").className = "bg2")
    setTimeout("document.location.reload(true)", timeoutPeriod);
  }

  render() {
    return (
      <div id="contactBack">
        <div id='contactTitle'>Contact Me</div>
        <div id='contactDesc'>If you have questions or want to collaborate, feel free to fill out the form below...</div>
        
        <form id="field">
          <input id="nameForm" type="text" placeholder="Name" name='from_name' onChange={this.handleChange} />
          <input id="emailForm" type="text" placeholder="Email" name='from_email' onChange={this.handleChange} />
           <br />
          <textarea id="messageForm" type="text" placeholder="Message" name='message_html' onChange={this.handleChange} />
          <br />
        </form>

        <div class="container">
          <button class="btn btn-inside btn-boarder">
            <img
              src="https://i.cloudup.com/gBzAn-oW_S-2000x2000.png"
              width="30px"
              height="30px"
              id="plane"
            />
          </button>
          <div class="bg" onClick={() => this.ani(4000)}>
            <img
              src="https://i.cloudup.com/2ZAX3hVsBE-3000x3000.png"
              id="bg"
              width="30px"
              height="30px"
              style={{ opacity: 0 }}
            />
          </div>
        </div>

        <div id="hold">Pic maybe, idk</div>
      </div>
    );
  }
}
export default ContactMe;
