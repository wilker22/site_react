import React, { Component, Fragment } from 'react'

import ProjectDetails from '../components/ProjectDetails/ProjectDetails'
import ProjectDetails from '../components/TopNavigation/TopNavigation'
import ProjectDetails from '../components/PageTop/PageTop'
import ProjectDetails from '../components/Footer/Footer'

 class ProjectDetailsPage extends Component {
  render() {
    return (
      <Fragment>
        <TopNavigation title='Detalhes do Projeto'/>
        <PageTop pagetitle='Detalhes do Projeto' />
        <ProjectDetails />
        <Footer />
      </Fragment>
    )
  }
}

export default ProjectDetailsPage