import React, {useEffect, useState} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import classes from './MainNavigation.module.css';
import {useLocation} from "react-router-dom";


export default function MainNavigation() {
    const [clickedLink, setClickedLink] = useState('');
    const [colorChange, setColorChange] = useState(false);
    const changeNavbarColor = () => {
        if (window.scrollY >= 100) {
            setColorChange(true);
        } else {
            setColorChange(false);
        }

        setActiveNavLinkOnScroll();
    };

    function isInViewport(element) {
        let box = document.querySelector('.' + element);
        const rect = box.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    const setActiveNavLinkOnScroll = () => {

        ['about', 'service', 'portfolio', 'contact', 'home'].map(comp => {
            return isInViewport(comp) ? setClickedLink('#' + comp) : ''
        })
    }

    const {hash} = useLocation()

    useEffect(() => {

        window.addEventListener('scroll', changeNavbarColor);
        setClickedLink(hash)
        return () => {
            window.removeEventListener('scroll', () => changeNavbarColor);
        };
    }, [hash])


    return (

        <Navbar sticky={'top'} collapseOnSelect bg={colorChange ? 'dark' : 'transparent'}
                variant="dark" expand={'md'}>
            <Container fluid className={'mt-3 '}>
                <Navbar.Brand>
                    <Nav.Link className={'mx-3 nav-link text-light'} href="#home"><span
                        className={'display-6 fw-bold'}>MK</span></Nav.Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">

                        <Nav.Link

                            className={clickedLink === '#home' ?
                                classes.nav_link_active + ' mx-3 nav-link fw-bold' :
                                classes.nav_link_hover + ' mx-3 nav-link fw-bold'}

                            href="#home">
                            Home</Nav.Link>
                        <Nav.Link
                            className={clickedLink === '#about' ?
                                classes.nav_link_active + ' mx-3 nav-link fw-bold' :
                                classes.nav_link_hover + ' mx-3 nav-link fw-bold'}
                            href="#about">About</Nav.Link>
                        <Nav.Link
                            className={clickedLink === '#service' ?
                                classes.nav_link_active + ' mx-3 nav-link fw-bold' :
                                classes.nav_link_hover + ' mx-3 nav-link fw-bold'}
                            href="#service">Service</Nav.Link>
                        <Nav.Link
                            className={clickedLink === '#portfolio' ?
                                classes.nav_link_active + ' mx-3 nav-link fw-bold' :
                                classes.nav_link_hover + ' mx-3 nav-link fw-bold'}
                            href="#portfolio">Portfolio</Nav.Link>
                        <Nav.Link
                            className={clickedLink === '#contact' ?
                                classes.nav_link_active + ' mx-3 nav-link fw-bold' :
                                classes.nav_link_hover + ' mx-3 nav-link fw-bold'}
                            href="#contact">Contact</Nav.Link>



                    </Nav>
                </Navbar.Collapse>
            </Container>
            <span className={classes.divider}>x</span>
        </Navbar>


    );
}