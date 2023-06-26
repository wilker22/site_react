import React, { Component, Fragment } from 'react'

import Services from "../components/Services/Services";
import TopBanner from "../components/TopBanner/TopBanner";
import TopNavigation from "../components/TopNavigation/TopNavigation";
import Analysis from "../components/Analysis/Analysis";
import Summary from "../components/Summary/Summary";
import RecentProject from "../components/RecentProject/RecentProject";
import Courses from "../components/Courses/Courses";
import Video from "../components/Video/Video";
import ClientReview from "../components/ClientReview/ClientReview";
import AboutMe from "../components/AboutMe/AboutMe";
import Footer from "../components/Footer/Footer";

class HomePage extends Component {
    componentDidMount(){
        window.scroll(0,0)
   }
    
    
    render() {
        
  
        return (
            <Fragment>
                <TopNavigation />
                <TopBanner />
                <Services />
                <Analysis />
                <Summary />
                <RecentProject />
                <Courses />
                <Video />
                <ClientReview />
                <AboutMe />
                <Footer />
            </Fragment>
        )
    }
}

export default HomePage