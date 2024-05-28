import React from 'react'
import '../style.css'
import { Link } from 'react-router-dom'
const WoMeAc = () => {
    return (
        <div className='womeac' style={{ padding: '100px 200px' }}>

            <div className='women' >
                <div>
                    <h1>Women</h1>
                    <h6>Spring 2018</h6>
                </div>
                <div className='womeachover'>
                    <h1>Women</h1>
                    <h6>Spring 2018</h6>
                    <Link to="/shop">Shop Now</Link>
                </div>
            </div>
            <div className='men'>
                <h1>Men</h1>
                <h6>Spring 2018</h6>
                <div className='womeachover'>
                    <h1>Men</h1>
                    <h6>Spring 2018</h6>
                    <Link to="/shop">Shop Now</Link>
                </div>
            </div>
            <div className='accessories'>
                <h1>Accessories</h1>
                <h6>Spring 2018</h6>
                <div className='womeachover'>
                    <h1>Accessories</h1>
                    <h6>Spring 2018</h6>

                    <Link to="/shop">Shop Now</Link>

                </div>
            </div>

        </div>
    )
}

export default WoMeAc