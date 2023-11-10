import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Rating } from "react-simple-star-rating";
import ReactPlayer from "react-player/youtube";

const MovieCard = ({props}) => {
  return (
<Card style={{ width: "18rem" }}>
<ReactPlayer url={props.trailerSrc} width="100%" />
<Card.Body>
<Card.Title>{props.title}</Card.Title>
<Card.Text>{props.description}</Card.Text>
<Rating iconsCount={5} readonly={true} initialValue={props.rating} />
</Card.Body>
</Card>
  );
}

export default MovieCard;