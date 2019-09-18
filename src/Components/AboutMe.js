import React, { Component } from "react";
import "../Style/AboutMe.css";

class AboutMe extends Component {
  render() {
    return (
      <div>
        <div id='title'>About me</div>
        <div id="abtPic"/>
        <div id='abtMeDesc'>Parker is a young music enthusiast who is super passionate about technology.
          He is a detail oriented developer well versed in structuring, developing and implmenting interactive
          websites with experience in Object Oriented and Procedural programming,
          HTML5, CSS3, Javascript and React.<br/><br/>
          Parker is a hard worker and a quick learner. He strives provide exceptional service to everyone around him.
          He is kind, creative and driven.
        </div>
      </div>
    );
  }
}

export default AboutMe;
