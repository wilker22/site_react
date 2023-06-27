import React, { Component, Fragment } from 'react'
import AllCoursesPage from '../pages/AllCoursesPage';
import AboutPage from '../pages/AboutPage';
import AllServicePage from '../pages/AllServicePage';
import ContactPage from '../pages/ContactPages';
import HomePage from '../pages/HomePage';
import PortfolioPage from '../pages/PortfolioPage';
import ProjectDetailsPage from '../pages/ProjectDetailsPage';
import CourseDetailsPage from '../pages/CourseDetailsPage'
import RefundPage from '../pages/RefundPage';

import {
    BrowserRouter as Router,
    Switch,
    Route

} from "react-router-dom";


class AppRoutter extends Component {
    render() {
        return (
            <Fragment>
               <Router>
               <Switch>
                    <Route exact path="/" component={ HomePage } />
                    <Route exact path="/service" component={AllServicePage} />
                    <Route exact path="/courses" component={AllCoursesPage} />
                    <Route exact path="/porfolio" component={PortfolioPage} />
                    <Route exact path="/about" component={AboutPage} />
                    <Route exact path="/contact" component={ContactPage} />
                    <Route exact path="/projectDetails" component={ProjectDetailsPage} />
                    <Route exact path="/coursedetails" component={CourseDetailsPage} />
                    <Route exact path="/refund" component={RefundPage} />  


                    
                </Switch>
               </Router>
                
            </Fragment>
        )
    }
}

export default AppRoutter