import React, { useEffect, useState } from "react";

// services
import { getAllMovies } from '../services/endpoints'

// components
import Card from './Card'
import Modal from "./Modal";

const Main = () => {
  const [movies, setMovies] = useState({})
  const [show, setShow] = useState(false);


  const getMovies = async () => {
    const response = await getAllMovies()
    // console.log("response", response)
    setMovies(response)
  }
  useEffect(() => {
    getMovies()
  },[])

  return (
    <div className="container my-0 d-flex flex-wrap justify-content-center">
      {
        Object.keys(movies).length
        ? movies.results.map( movie => <Card show={show} setShow={setShow} movie={movie} config_path={movies.config_path} genre_data={movies.genre_data} key={movie.id}/>)
        : null
      }
      <Modal show={show} setShow={setShow}/>
    </div>
  );
};

export default Main;
