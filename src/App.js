import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MovieList from "./MovieList";
import { Data } from "./DataMovie";
import NavBar from "./NavBar";
import Filter from "./Filter";
import { Rating } from "react-simple-star-rating";

function App() {
  const [info, setinfo] = useState(Data);
  function Add(newTitle, description, newRating) {
    setinfo([
      ...info,
      { title: newTitle, description: description, Rating: newRating },
    ]);
  }
  //function callback
  function search(ret) {
    console.log(ret);
    setinfo(
      info.Filter((el) => el.title.toLowerCase().includes(ret.toLowerCase()))
    );
  }

  const [rating, setRating] = useState(0);

  //Catch Rating value
  const handleRating = (rate) => {
    setRating(rate);
    setinfo(info.Filter((el) => el.rating <= rating));
  };
  return (
    <>
      {
        <div className="container text-center mt-3 box-state">
          <NavBar Add={Add} />
          <Filter search={search} />
          <Rating onClick={handleRating} />
          <MovieList props={info} />
        </div>
      }
    </>
  );
}

export default App;
