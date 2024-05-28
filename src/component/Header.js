import React, { useEffect, useState } from 'react';
import { Badge, Button, Container, Dropdown, FormControl, Nav, Navbar } from 'react-bootstrap';
import { FaShoppingCart } from "react-icons/fa";
import { AiFillDelete } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { Link } from 'react-router-dom';
import "../App.css";
import { useDispatch, useSelector } from 'react-redux';
import { remove } from '../store/cartSlice';
import { bysearch } from '../store/filterSlice';
import "./style.css";
import { IoMdLogOut } from "react-icons/io";
import { signOut } from "firebase/auth";
import { auth } from './Home/configAdmin/fireBase';

const Header = () => {
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const removeCart = (cart) => {
        dispatch(remove(cart))
    }

    const handleSearch = (e) => {
        dispatch(bysearch(e.target.value));
    };

    const [isNavTransparent, setIsNavTransparent] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsNavTransparent(false);
            } else {
                setIsNavTransparent(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    const handleLogOut = () => {
        signOut(auth).then(() => {
           console.log("successfully signOut")
          }).catch((error) => {
           console.log(error)
          })
    }
    return (
        <Navbar
            bg={isNavTransparent ? 'transparent' : 'white'}
            expand="lg"
            className={"fixed-top"}
            variant="dark"
            style={{ height: 70 }}
        >
            <Container className='nav'>
                <Navbar.Brand>
                    <Link to='/' className='logo'>Perfex</Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto linkfornav">
                        <Link to='/'>Home</Link>
                        <Link to="/shop">Shop</Link>
                        <Link to='/'>Features</Link>
                        <Link to='/'>Blog</Link>
                        <Link to='/'>About</Link>
                        <Link to='/'>Contact</Link>
                    </Nav>
                </Navbar.Collapse>
                <div className="leftnav">
                    <Navbar.Text>
                        <FormControl style={{ width: '100%' }} placeholder='Search Product' className='search' onChange={handleSearch} />
                    </Navbar.Text>
                    <Nav>
                        <Dropdown>
                            <Dropdown.Toggle variant="white">
                                <Badge bg="">
                                    <FaShoppingCart style={{ color: "#000", fontSize: '25px' }} />
                                    <span className='badg'>{cart.length}</span>
                                </Badge>
                                <Dropdown.Menu style={{ minWidth: 370 }}>
                                    {cart.length > 0 ? (
                                        cart.map((cartItem) => (
                                            <>
                                                <span className='cartitem' key={cartItem.id}>
                                                    <img src={cartItem.image} className='cartItemImg' />
                                                    <div className='cartItemDetail'>
                                                        <span>{cartItem.name}</span>
                                                        <span> ₹{cartItem.price}</span>
                                                    </div>
                                                    <AiFillDelete
                                                        fontSize="20px"
                                                        style={{ cursor: "pointer" }}
                                                        onClick={() => removeCart(cartItem.id)}
                                                    />
                                                </span>
                                            </>
                                        ))
                                    ) : (
                                        <span style={{ padding: 10, display: 'block' }}>Cart is empty!</span>
                                    )}
                                    <Link to="/cart">
                                        <Button style={{ width: "95%", margin: "0 10px" }}>
                                            Go To Cart
                                        </Button>
                                    </Link>
                                </Dropdown.Menu>
                            </Dropdown.Toggle>
                        </Dropdown>
                        <Link to="/login">
                            <Badge bg="" style={{ marginLeft: "10px", marginTop: "7px" }}>
                                <CgProfile className='loginIcon' />
                            </Badge>
                            <IoMdLogOut className='logoutIcon' onClick={handleLogOut}/>
                        </Link>
                    </Nav>
                </div>
            </Container>
        </Navbar>
    );
}

export default Header;
