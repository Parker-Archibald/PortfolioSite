import React, {Component} from 'react';
import NavBar from '../Components/Nav'
import '../Style/NavStyles.css'
import ContactMe from '../Components/ContactMe';
import Social from '../Components/Social';

class ContactMePage extends Component {
    render() {
        return(
            <div>
                <p>
                    Contact Me
                    <ContactMe/>
                    <Social/>
                </p>
            </div>
        )
    }
}
export default ContactMePage;