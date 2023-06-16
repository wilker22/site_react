import React, { Component, Fragment } from 'react'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

class TopNavigation extends Component {

    constructor(){
        super();
        this.state={
            navBarTitle: "navTitle"
        }
    }


    onScroll = () => {
        if(window.scrollY>100){
            this.setState({navBarTitle:'navTitleScroll'})
        }else if(window.scrollY<100){
            this.setState({navBarTitle:'navTitle'})
        }
    }

    componentDidMount(){
        window.addEventListener('scroll', this.onScroll)
    }

    render() {
        return (
            <Fragment>
                <Navbar collapseOnSelect fixed="top" expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand className={this.state.navBarTitle} href="#home">WTECH LEARNING</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">

                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">HOME</Nav.Link>
                            <Nav.Link href="#deets">ABOUT</Nav.Link>
                            <Nav.Link href="#deets">SERVICE</Nav.Link>
                            <Nav.Link href="#deets">COURSES</Nav.Link>
                            <Nav.Link href="#deets">PORTFOLIO</Nav.Link>
                            <Nav.Link href="#deets">CONTACT US</Nav.Link>


                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Fragment>
        )
    }
}

export default TopNavigation