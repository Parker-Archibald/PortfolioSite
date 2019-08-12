import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import React from 'react';
import HomePage from '../Pages/HomePage';
import AboutMePage from '../Pages/AboutMePage';
import ContactMePage from '../Pages/ContactMePage';
import PortfolioPage from '../Pages/PortfolioPage';

const Routes = () => {
    return (
        <>
        <Route exact path='/' component = {() => <HomePage/>}/>
        <Route path='/AboutMe' component = {() => <AboutMePage/>}/>
        <Route path ='/ContactMe' component = {() => <ContactMePage/>}/>
        <Route path='/Portfolio' component = {() => <PortfolioPage/>}/>
        </>
    );
};

export default Routes;
