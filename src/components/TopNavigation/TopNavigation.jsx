import React, { Component, Fragment } from 'react'

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../../assets/css/custom.css';
import whiteLogo from '../../assets/image/WTECHLOGO4.png';
import blackLogo from '../../assets/image/wtechlogoblk.png';
//import whiteLogo from '../../assets/image/logo_white.png';
//import blackLogo from '../../assets/image/logo_black.png';
import {NavLink} from "react-router-dom"



class TopNavigation extends Component {

    constructor() {
        super();
        this.state = {
            navBarTitle: "navTitle",
            navBarLogo: [whiteLogo], // object,
            navVariant: 'dark',
            navBarBack: "navBackground",
            navBarItem: "navItem"
        }
    }


    onScroll = () => {
        if (window.scrollY > 100) {
            this.setState({ navBarTitle: 'navTitleScroll', navBarLogo: [blackLogo], navBarBack: 'navBackgroundScroll', navBarItem: 'navItemScroll', navVariant: 'ligth' })
        } else if (window.scrollY < 100) {
            this.setState({ navBarTitle: 'navTitle', navBarLogo: [whiteLogo], navBarBack: 'navBackground', navBarItem: 'navItem', navVariant: 'dark' })
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.onScroll)
        
    }

    render() {
        return (
            <Fragment>
                <Navbar className={this.state.navBarBack} collapseOnSelect fixed="top" expand="lg" variant={this.state.navVariant}>
                    <Navbar.Brand className={this.state.navBarTitle} href="#home"> <img src={this.state.navBarLogo} /> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">

                        </Nav>
                        <Nav>
                            <Nav.Link> <NavLink className={this.state.navBarItem} to="/">INÍCIO</NavLink> </Nav.Link>

                            <Nav.Link> <NavLink className={this.state.navBarItem} to="/about">SOBRE</NavLink> </Nav.Link>

                            <Nav.Link>  <NavLink className={this.state.navBarItem} to="/service">SERVIÇOS</NavLink> </Nav.Link>

                            <Nav.Link>  <NavLink className={this.state.navBarItem} to="/courses">CURSOS</NavLink> </Nav.Link>

                            <Nav.Link>  <NavLink className={this.state.navBarItem} to="/porfolio">PORTFOLIO</NavLink> </Nav.Link>

                            <Nav.Link>  <NavLink className={this.state.navBarItem} to="/contact">CONTATO</NavLink> </Nav.Link>


                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Fragment>
        )
    }
}

export default TopNavigation