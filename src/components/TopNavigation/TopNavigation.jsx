import React, { Component, Fragment } from 'react'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../../assets/css/custom.css';
import whiteLogo from '../../assets/image/logo_white.png';
import blackLogo from '../../assets/image/logo_black.png';

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
            this.setState({ navBarTitle: 'navTitleScroll', navBarLogo: [blackLogo], navBarBack: 'navBackgroundScroll', navBarItem: 'navItemScroll', navVariant: 'dark' })
        } else if (window.scrollY < 100) {
            this.setState({ navBarTitle: 'navTitle', navBarLogo: [whiteLogo], navBarBack: 'navBackground', navBarItem: 'navItem', navVariant: 'ligth' })
        }
    }

    componentDidMount() {
        this.setState({ navBarTitle: 'navTitle', navBarLogo: [whiteLogo] })
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
                            <Nav.Link className={this.state.navBarItem} href="#deets">INÍCIO</Nav.Link>
                            <Nav.Link className={this.state.navBarItem} href="#deets">SOBRE</Nav.Link>
                            <Nav.Link className={this.state.navBarItem} href="#deets">SERVIÇOS</Nav.Link>
                            <Nav.Link className={this.state.navBarItem} href="#deets">CURSOS</Nav.Link>
                            <Nav.Link className={this.state.navBarItem} href="#deets">PORTFOLIO</Nav.Link>
                            <Nav.Link className={this.state.navBarItem} href="#deets">FALE CONOSCO</Nav.Link>


                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Fragment>
        )
    }
}

export default TopNavigation