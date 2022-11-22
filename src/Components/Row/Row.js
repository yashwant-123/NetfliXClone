import React, { useEffect } from "react";
import Card from "../Card/card";
import { useState } from "react";
import axios from "axios";
import "./Row.css";
function Row(props) {
  const [movie, setmovies] = useState([]);
  const getmovies = async () => {
    const api_d = await axios.get(props.url);
    setmovies(api_d.data.results);
    
  }; 

  
  useEffect(() => {
    getmovies();
  }, []);
  return (
    <>
      <div className="row_wrapper">
        <h3 className="Title">{props.title}</h3>
        <div className="row_card">
          {movie.map((el) => {
            return (
              <Card title={el.title} poster={el.backdrop_path} id={el.id} />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Row;
