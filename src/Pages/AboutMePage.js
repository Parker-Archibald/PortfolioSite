import React, {Component} from 'react';
import '../Style/NavStyles.css'
import '../Style/AboutMe.css'
import AboutMe from '../Components/AboutMe'

class AboutMePage extends Component {
    render() {
        return(
            <div id='abt'>
                <p>
                    <AboutMe/>
                </p>
            </div>
        )
    }
}
export default AboutMePage;