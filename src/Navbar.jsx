import React from 'react';
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from './Context';

const Navbar = () => {
    const { openSideBar } = useGlobalContext();
    return (
        <nav>
            <div className='nav-center'>
                <h3 className='logo'>Strapi</h3>
                <button className='toggle-btn' onClick={openSideBar}>
                    <FaBars />
                </button>
            </div>
        </nav>
    )
}

export default Navbar