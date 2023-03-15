
import React from 'react';
import Search from './Search';


const NavBar = ({setLocationData}) => {
    return (
        <div className='navbar'>
            <img className='logopage' src="/logopage.png" alt="" />
             <Search newLocation={setLocationData} />
        </div>
    );
};

export default NavBar;