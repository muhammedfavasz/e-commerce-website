import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Rating from '../Rating';
import { useDispatch, useSelector } from 'react-redux';
import { clear, gender } from '../../store/filterSlice';
import '../style.css';

const NavBar = () => {
    
    const filterBy = useSelector((state) => state.filter);

    const [selectedGender, setSelectedGender] = useState(filterBy.gender);

    const [active, setActive] = useState(true); 

    const dispatch = useDispatch();

    const handleFilterByGender = (selectedGender) => {
        if (selectedGender === 'all') {
            dispatch(clear());
            setActive(true); 
        } else {
            dispatch(gender(selectedGender));
            setActive(false); 
        }
    };

    return (
        <>
            <Container>
                <h1 className="filterNav">PRODUCT OVERVIEW</h1>
                <Navbar bg="light" expand="lg">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link
                                as="div"
                                onClick={() => handleFilterByGender('all')}
                                active={active}
                                className='filterNavLink'
                            >
                                All product
                            </Nav.Link>
                            <Nav.Link
                                as="div"
                                onClick={() => handleFilterByGender('men')}
                                active={filterBy.gender === 'men'}
                                className='filterNavLink'
                            >
                                Men
                            </Nav.Link>
                            <Nav.Link
                                as="div"
                                onClick={() => handleFilterByGender('shirt')}
                                active={filterBy.gender === 'shirt'}
                                className='filterNavLink'
                            >
                                shirt
                            </Nav.Link>
                            <Nav.Link
                                as="div"
                                onClick={() => handleFilterByGender('women')}
                                active={filterBy.gender === 'women'}
                                className='filterNavLink'
                            >
                                women
                            </Nav.Link>
                            <Nav.Link
                                as="div"
                                onClick={() => handleFilterByGender('watch')}
                                active={filterBy.gender === 'watch'}
                                className='filterNavLink'
                            >
                                watch
                            </Nav.Link>
                            <Nav.Link
                                as="div"
                                onClick={() => handleFilterByGender('shoe')}
                                active={filterBy.gender === 'shoe'}
                                className='filterNavLink'
                            >
                                shoe
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </>
    );
};

export default NavBar;
