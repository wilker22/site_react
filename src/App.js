import React from "react";
import TopBanner from "./components/TopBanner/TopBanner";
import Services from "./components/TopBanner/Services/Services";
import TopNavigation from "./components/TopNavigation/TopNavigation";
import Analysis from "./components/Analysis/Analysis";
import Summary from "./components/Summary/Summary";
import RecentProject from "./components/RecentProject/RecentProject";
import Courses from "./components/Courses/Courses";
import Video from "./components/Video/Video";
import ClientReview from "./components/ClientReview/ClientReview";
import AboutMe from "./components/AboutMe/AboutMe";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <div>
      <TopNavigation />
      <TopBanner />
      <Analysis />
      <Summary />
      <RecentProject />
      <Courses />
      <Video />
      <ClientReview />
      <AboutMe />
      <Footer/>
      <Services />
    </div>
  );
}

export default App;
