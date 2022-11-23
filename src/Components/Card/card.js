import axios from "axios";
import React, { Component } from "react";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";

import "./card.css";


function Card(props) {
  const imgaeurl = `https://image.tmdb.org/t/p/original/${props.poster}`;
  const [video, setVideo] = useState(props.title);
  const [isHovered, setIsHovered] = useState(false);
  const youtubeUrl = `https://www.youtube.com/embed/`;

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
          console.log(response);
          if (response.data.videos.results.length > 0) {
            setVideo(response.data.videos.results[0].key);
          }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchURL();
  }, []);

  var src=`${youtubeUrl}${video}`;
  console.log(src);
  return (
    <>
    
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
    {!isHovered ? (
        
      <img className='image' src={imgaeurl} alt='poster' />
    ) : (
      <iframe className="iframe" 
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
      allowfullscreen
      title='YouTube video player'
      width='240px'
      height='130px'
      frameborder='0'
      src={`${youtubeUrl}${video}`}
    ></iframe>
    )
    
    }
  </div>
  </>
);
}

export default Card;

