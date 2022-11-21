import axios from "axios";
import React, { Component } from "react";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";

import "./card.css";

function Card(props) {
  const imgaeurl = `https://image.tmdb.org/t/p/original/${props.poster}`;
  const [video, setVideo] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const youtubeUrl = `https://www.youtube.com/watch?v=_pAmhY0siWM`;

  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const fetchURL = async () => {
    try {
        const response = await axios.get(`/movie/${props.id}`, {
            params: {
              append_to_response: 'videos',
            },
          });
          if (response.data.videos.results.lenght > 0) {
            setVideo(response.data.videos.results[0].key);
          }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchURL();
  }, []);


  return (
    <>
    
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
    {!isHovered ? (
        
      <img className='image' src={imgaeurl} alt='poster' />
    ) : (
      <div >
        <img className='imager' src={imgaeurl} alt='poster' />
        <p className="props">{props.title}</p>
        </div>
    )
    
    }
  </div>
  </>
);
}

export default Card;

