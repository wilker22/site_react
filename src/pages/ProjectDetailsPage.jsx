import React, { Component, Fragment } from 'react'

import ProjectDetails from '../components/ProjectDetails/ProjectDetails'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import PageTop from '../components/PageTop/PageTop'
import Footer from '../components/Footer/Footer'

 class ProjectDetailsPage extends Component {
  componentDidMount(){
    window.scroll(0,0)
}
  
  
  render() {
    

    return (
      <Fragment>
        <TopNavigation title="Detalhes do Projeto"/>
        <PageTop pagetitle="Detalhes do Projeto" />
        <ProjectDetails />
        <Footer />
      </Fragment >
    )
  }
}

export default ProjectDetailsPage