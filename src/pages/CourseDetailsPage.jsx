import React, { Component, Fragment } from 'react'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import PageTop from '../components/PageTop/PageTop'
import CourseDetails from '../components/CourseDetails/CourseDetails'
import Footer from '../components/Footer/Footer'

class CourseDetailsPage extends Component {
    componentDidMount(){
        window.scroll(0,0)
   }
    
    
    render() {
       
  
        return (
            <Fragment>
                <TopNavigation title="Detalhes do Curso" />
                <PageTop title="Detalhes do Curso" />
                <CourseDetails />
                <Footer />
            </Fragment>
        )
    }
}

export default CourseDetailsPage