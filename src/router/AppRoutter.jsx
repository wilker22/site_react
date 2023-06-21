import React, { Component, Fragment } from 'react'
import AllCourses from '../components/AllCourses/AllCourses';
import AboutPage from '../pages/AboutPage';
import AllServicePage from '../pages/AllServicePage';
import ContactPage from '../pages/ContactPages';
import HomePage from '../pages/HomePage';
import PortfolioPage from '../pages/PortfolioPage';
import {
    BrowserRouter as Router,
    Switch,
    Route

} from "react-router-dom";


class AppRoutter extends Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    <Route exact path="/" component={ HomePage } />
                    <Route exact path="/service" component={AllServicePage} />
                    <Route exact path="/course" component={AllCourses} />
                    <Route exact path="/porfolio" component={PortfolioPage} />
                    <Route exact path="/about" component={AboutPage} />
                    <Route exact path="/contact" component={ContactPage} />
                </Switch>
            </Fragment>
        )
    }
}

export default AppRoutter