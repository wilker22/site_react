import React, { Component, Fragment } from 'react'
import Footer from '../components/Footer/Footer'
import PageTop from '../components/PageTop/PageTop'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import TermsDescription from '../components/TermsDescription/TermsDescription'

 class TremsPage extends Component {
     componentDidMount(){
          window.scroll(0,0)
      }
     render() {
          return (
             <Fragment>
                  <TopNavigation title="Termos e Condições " />  
                 <PageTop pagetitle="Termos e Condições" /> 
                  <TermsDescription />
                  <Footer />
             </Fragment>
          )
     }
}

export default TremsPage