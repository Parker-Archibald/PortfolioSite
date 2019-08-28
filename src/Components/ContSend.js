import React, {Component} from 'react';
import '../Style/SendBtn.css';

class ContSend extends Component {

    ani() {
        document.getElementById('plane').className ='animation';
        document.getElementById('bg').className ='bg2';
    }

    render() {
    return (
        <div>
            <div class="container">
			<button class="btn btn-inside btn-boarder" ><img src="https://i.cloudup.com/gBzAn-oW_S-2000x2000.png" width="30px" height="30px" id="plane"/></button>
                <div class="bg" onClick={this.ani}><img src="https://i.cloudup.com/2ZAX3hVsBE-3000x3000.png" id="bg" width="30px" height="30px" style={{opacity: 0}}/></div>
		    </div>
        </div>
    )
}
}
export default ContSend;