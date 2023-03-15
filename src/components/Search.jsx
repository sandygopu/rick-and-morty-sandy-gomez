

import React from 'react';
import { useState } from 'react';

const Search = ({newLocation}) => {

    const [location, setLocation] = useState("");
    

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(location);
        if (location === "" || !location ) return;

        newLocation(location);
    }


    return (
        <div className='search-container'>
            <form onSubmit={onSubmit}>
                <div className='input-group'>
                    <input type="text" 
                    className='search-control'
                    placeholder='Try a location Id...'
                    onChange={(e) => setLocation(e.target.value)}/>
                </div>
            </form>
            
        </div>
    );
};

export default Search;