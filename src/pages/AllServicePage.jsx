import React, { Component, Fragment } from 'react'
import ContactSec from '../components/ContactSec/ContactSec'
import Footer from '../components/Footer/Footer'
import PageTop from '../components/PageTop/PageTop'
import Services from '../components/Services/Services'
import TopNavigation from '../components/TopNavigation/TopNavigation'

class AllServicePage extends Component {
     componentDidMount(){
          window.scroll(0,0)
     }
    
     render() {
         
     
          return (
             <Fragment>
                  <TopNavigation title="Nossos Serviços" />
                  <PageTop pagetitle="Nossos Serviços" />
                  <Services />
                  <ContactSec />
                  <Footer />
             </Fragment>
          )
     }
}

export default AllServicePage