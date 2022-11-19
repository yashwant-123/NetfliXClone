import React, { Component } from 'react';
import './card.css';

function Card(props) {
       const imgaeurl=`https://image.tmdb.org/t/p/original/${props.poster}`;
        console.log(imgaeurl);
    return ( <>
        <div className='Card'>
            <img className='image' src={imgaeurl} alt="poster" />
        </div>
    </> );
}

export default Card;