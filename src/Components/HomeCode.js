import React, { Component } from "react";
import "../Style/Styles.css";

class HomeCode extends Component {
  state = {
    author: "",
    quote: "",
    site: ""
  };

  componentDidMount = () => {
    fetch("http://quotes.stormconsultancy.co.uk/random.json")
      .then(response => {
        return response.json();
      })
      .then(myJson => {
        this.setState({
          author: myJson.author,
          quote: myJson.quote,
          site: myJson.permalink
        });
      });
  };

  render() {
    return (
      <div>
        <title>Home Page</title>
        <body>
          <div id="code">
            <pre class="nums" id="typeWriterDiv">
              1 <span class="highlight">&lt;div&gt;</span>
            </pre>
            <pre class="nums" id="typeWriter">
              2 <span class="highlight">&lt;p&gt;</span>Hello, my name is Parker
              Archibald<span class="highlight">&lt;p&gt;</span>
            </pre>
            <pre id="typeWriter2" class='nums'>
              3 <span class="highlight">&lt;p&gt;</span>I am a full stack web
              developer.<span class="highlight">&lt;p&gt;</span>
            </pre>
            <pre class="nums" id="typeWriterDivLast">
              4 <span class="highlight">&lt;div/&gt;</span>
            </pre>
            <div>
              <p id="languages">Html5 | Css3 | Javascript | React | MongoDB</p>
            </div>
            <div id="quoteOfDay">
              {this.state.author} said: <br />"{this.state.quote}" <br />
              {this.state.site}
            </div>
          </div>
        </body>
      </div>
    );
  }
}
export default HomeCode;
