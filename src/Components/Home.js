import React from 'react';
import '../Style/HomePic.css';
import HomeCode from './HomeCode';
import '../Style/Home.css'
import Social from '../Components/Social';
import ProjectsBtn from '../Components/ProjectsBtn';

const Home = () => {
    return (
        <div className='Pic'>
            <HomeCode/>
            <div id='btn'><Social/></div>
            <div id='projectsBtn'><ProjectsBtn/></div>
        </div>
    )
}
export default Home;