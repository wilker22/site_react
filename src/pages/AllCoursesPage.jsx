import React, { Component, Fragment } from 'react'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import PageTop from '../components/PageTop/PageTop'
import AllCourses from '../components/AllCourses/AllCourses'
import Footer from '../components/Footer/Footer'

class AllCoursesPage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation />
                <PageTop pagetitle="Cursos" />
                <AllCourses />
                <Footer />
            </Fragment>
        )
    }
}

export default AllCoursesPage