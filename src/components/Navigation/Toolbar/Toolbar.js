import React, {useState} from 'react';
import {NavLink as RouterNav} from 'react-router-dom';
import './Toolbar.css';
import {
    Collapse, Input,
    Nav,
    Navbar,
    NavbarBrand,
    NavLink,
    NavbarToggler,
    NavItem, InputGroup,
} from "reactstrap";
import logo from '../../../assets/images/logo-white.png'

const Toolbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return (
        <header className='Toolbar d-flex justify-content-between'>
            <Navbar expand="md" className='w-100 container text-uppercase' dark>
                <NavbarBrand exact tag={RouterNav} to='/' ><img width='50' height='auto' src={logo} alt="main logo"/></NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <InputGroup className='col-12 col-md-6 my-3 p-0'>
                        <Input type='text' placeholder="Search the player" className=''/>
                    </InputGroup>
                    <Nav navbar className='Main-nav col-12 col-md-6'>
                        <NavItem className='mx-2'>
                            <NavLink exact tag={RouterNav} className='text-light' to='/' >Home</NavLink>
                        </NavItem>
                        <NavItem className='mx-2'>
                            <NavLink exact tag={RouterNav} className='text-light' to='players' >All Footballers</NavLink>
                        </NavItem>
                        <NavItem className='mx-2'>
                            <NavLink exact tag={RouterNav} className='text-light' to='contacts' >Contact us</NavLink>
                        </NavItem>
                        <NavItem className='mx-2'>
                            <NavLink exact tag={RouterNav} className='text-light' to='others' >Other sports</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </header>
    );
};

export default Toolbar;
