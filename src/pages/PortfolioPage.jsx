import React, { Component, Fragment } from 'react'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import PageTop from '../components/PageTop/PageTop'
import AllProjects from '../components/AllProjects/AllProjects'
import Footer from '../components/Footer/Footer'

 class PortfolioPage extends Component {
  render() {
    return (
      <Fragment>
        <TopNavigation/>
        <PageTop />
        <AllProjects/>
        <Footer/>
      </Fragment>
    )
  }
}

export default PortfolioPage