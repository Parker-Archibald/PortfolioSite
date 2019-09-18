import React from "react";
import '../Style/Social.css'

const Social = () => {
  return (
    <div class="hover">
       <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
      <span id='socialWord'>Socials</span>
      <a class="social-link" href="">
        <i href ='#' class="fa fa-facebook" />
      </a>
      <a
        class="social-link" href=""
      >
        <i href ='#' class="fa fa-instagram" />
      </a>
      <a
        class="social-link"
        href="https://www.linkedin.com/in/parker-archibald-8a49b2180/"
      >
        <i href ='#' class="fa fa-linkedin" />
      </a>
      <a
        class="social-link"
        href="https://github.com/Parker-Archibald"
      >
        <i href='#' class="fa fa-github" />
      </a>
    </div>
  );
};
export default Social;
