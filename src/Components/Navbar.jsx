import React from 'react';

const Navbar = () => {
    return (
        <div>
            <nav className='nav-container'>
                <div className='nav-left'>
                    <h4>Meal Hub</h4>
                </div>

                <div className='nav-right'>
                    <p>Home</p>
                    <p>about</p>
                    <p>contact</p>
                    <p>Others</p>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;