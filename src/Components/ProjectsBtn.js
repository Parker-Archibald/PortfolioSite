import React from 'react';
import '../Style/Social.css';
import {Link} from 'react-router-dom';

const ProjectsBtn = () => {
    return (
        <div class='hover'>
            <span>Projects</span>
                <Link to='./Portfolio' class='social-link'/>
        </div>
    )
}
export default ProjectsBtn;