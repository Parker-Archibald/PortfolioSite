import React, {Component} from 'react';
import '../Style/PortStyle.css';
import Proj1 from '../Components/Proj1';

class PortfolioPage extends Component {
    render() {
        return(
            <div id='portback'>
                <p>
                    Portfolio
                    <Proj1/>
                </p>
            </div>
        )
    }
}
export default PortfolioPage;