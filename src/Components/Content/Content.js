import React, { Component, useEffect ,useState} from 'react';
import './Content.css';
import axios from 'axios';
import RowData from '../../Constants/Urls';
import Row from '../Row/Row';
function Content(){

    return(
       <div className='Content'>
        {RowData.map((el)=>{
            return <Row title={el.title} url={el.url} />
        })}
       </div>
    )
}

export default Content;