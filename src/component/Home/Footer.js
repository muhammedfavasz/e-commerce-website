// Footer.js

import React from 'react';
import { auth } from './configAdmin/fireBase';


const Footer = () => {
    const user = auth.currentUser;
    return (
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <h4>Contact Us</h4>
                            <p>Email: info@example.com</p>
                            <p>Phone: +1 123 456 7890</p>
                        </div>
                        <div className="col-md-4">
                            <h4>Follow Us</h4>
                            <p>Facebook</p>
                            <p>Twitter</p>
                            <p>Instagram</p>
                        </div>
                        <div className="col-md-4">
                            <h4>Links</h4>
                            <p>Home</p>
                            <p>Shop</p>
                            <p>Contact</p>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2023 Your E-commerce. All Rights Reserved.</p>
                </div>
            </footer>
    );
};

export default Footer;
