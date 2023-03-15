
import React from 'react';
import Search from './Search';

const Location = ({ data }) => {
    console.log({data})

    return (
        
         <div > 
        <div className='location-info'>
            <div className='location-info-info'>
                <span>Nombre:</span>
                <h3>{data?.name}</h3>
            </div>
            <div className='location-info-info'>
                <span>Tipo:</span>
                <h3>{data?.type}</h3>
            </div>
            <div className='location-info-info'>
                <span>Dimensión:</span>
                <h3>{data?.dimension}</h3>
            </div>
            <div className='location-info-info'>
                <span>Población:</span>
                <h3>{data?.residents?.length }</h3>
            </div>
            
            
            
        </div>
        <h3 className='location-subtitle'>¡Wellcome to the crazy universe!</h3>
        </div> 
        
    );
};

export default Location;