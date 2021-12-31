import React, { useState } from 'react'
import './Header.css';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
    const [displayMenu, setDisplayMenu] = useState(false);
    const [display, setDisplay] = useState('none');
    return (
        <div className='header'>
            <div className='menu'>
                <p>Home</p>
                <p>Blogs</p>
                <p>Projects</p>
                <p>Contact Me</p>
            </div>
            <div className="menu-btn"><MenuIcon onClick={() => { setDisplayMenu(!displayMenu); setDisplay('flex') }} /></div>

            <div className='res-menu' onClick={() => setDisplayMenu(!displayMenu)} style={displayMenu ? { animationName: "example", display: display } : { animationName: "example2", display: display }}>
                <div className='container1'></div>
                <div className='container2'>
                    <p >Home</p>
                    <p>Blogs</p>
                    <p>Projects</p>
                    <p>Contact Me</p>
                </div>
            </div>
        </div >
    )
}

export default Header
