import React, { useEffect } from 'react';
import Card from '../Card/card';
import {  useState } from 'react';
import axios from 'axios';
function Row(props) {

    const [movie,setmovies] =useState([]);
    const getmovies= async ()=>{
        const api_d=await axios.get(props.url);
        setmovies(api_d.data.results);
            
    };

    useEffect(()=>{
        getmovies();
    },[]);
    return (  
        <></>
    );
}

export default Row;