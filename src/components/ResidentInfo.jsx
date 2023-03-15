
import React from 'react';
import axios from 'axios'
import { useEffect, useState } from 'react' 


const ResidentInfo = ({ dataCharacter }) => {

    
    console.log(dataCharacter)
   
    return (
        <div className="character-card">
            
            <img src={dataCharacter.image} alt="" />
            <h1 className='character-title'> {dataCharacter.name} </h1>


            <div className='character-info'>
            <div className='character-info-info'>
            <span>Species</span>
            <span>Origin</span>
            <span>Times Appear</span>
            </div>
            <div className='character-info-info'>
            <h3>{dataCharacter.species}</h3>
            <h3> {dataCharacter.origin.name} </h3>
            <h3> {dataCharacter.episode.length}</h3>
            </div>
            </div>
            
    
        </div>
    );
};

export default ResidentInfo;