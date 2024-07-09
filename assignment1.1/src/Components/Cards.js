import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Cards.css";
const movies = [
  {
    title: "Merry Christmas",
    description:
      "Merry Christmas is a 2024 Indian mystery thriller film directed by Sriram Raghavan and starring Katrina Kaif and Vijay Sethupathi.",
    actors: ["Katrina Kaif", "Vijay Sethupathi"],
    genre: "Thriller, Suspense",
    image:
      "https://upload.wikimedia.org/wikipedia/en/b/b0/Merry_Christmas_film_poster.jpg",
  },
  {
    title: "Sooryavanshi",
    description:
      "Sooryavanshi is a 2021 Indian action film directed by Rohit Shetty and starring Akshay Kumar and Katrina Kaif.",
    actors: ["Akshay Kumar", "Katrina Kaif"],
    genre: "Action, Drama",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/5/5e/Sooryavanshi_film_poster.jpg/220px-Sooryavanshi_film_poster.jpg",
  },
  {
    title: "Chhichhore",
    description:
      "Chhichhore is a 2019 Indian Hindi-language coming-of-age comedy-drama film directed by Nitesh Tiwari.",
    actors: ["Sushant Singh Rajput", "Shraddha Kapoor"],
    genre: "Comedy, Drama",
    image:
      "https://upload.wikimedia.org/wikipedia/en/3/3d/Chhichhore_Poster.jpg",
  },
  {
    title: "War",
    description:
      "War is a 2019 Indian Hindi-language action thriller film directed by Siddharth Anand.",
    actors: ["Hrithik Roshan", "Tiger Shroff"],
    genre: "Action, Thriller",
    image:
      "https://upload.wikimedia.org/wikipedia/en/6/6f/War_official_poster.jpg",
  },
  {
    title: "Dangal",
    description:
      "Dangal is a 2016 Indian Hindi-language biographical sports drama film directed by Nitesh Tiwari.",
    actors: ["Aamir Khan", "Fatima Sana Shaikh"],
    genre: "Biography, Drama, Sport",
    image: "https://upload.wikimedia.org/wikipedia/en/9/99/Dangal_Poster.jpg",
  },
  {
    title: "Kabir Singh",
    description:
      "Kabir Singh is a 2019 Indian Hindi-language romantic drama film written and directed by Sandeep Reddy Vanga.",
    actors: ["Shahid Kapoor", "Kiara Advani"],
    genre: "Drama, Romance",
    image:
      "https://m.media-amazon.com/images/M/MV5BNTVjMjExNWEtOWFiNS00ZTE2LWI0ODMtZTFlNDZiZWQ4MWVjXkEyXkFqcGdeQXVyNjcyNjMzMjQ@._V1_.jpg",
  },
  {
    title: "Uri: The Surgical Strike",
    description:
      "Uri: The Surgical Strike is a 2019 Indian Hindi-language military action film directed by Aditya Dhar.",
    actors: ["Vicky Kaushal", "Yami Gautam"],
    genre: "Action, Drama, War",
    image:
      "https://upload.wikimedia.org/wikipedia/en/3/3b/URI_-_New_poster.jpg",
  },
  {
    title: "Gully Boy",
    description:
      "Gully Boy is a 2019 Indian Hindi-language musical drama film directed by Zoya Akhtar.",
    actors: ["Ranveer Singh", "Alia Bhatt"],
    genre: "Drama, Music",
    image:
      "https://upload.wikimedia.org/wikipedia/en/0/07/Gully_Boy_poster.jpg",
  },
  {
    title: "Badla",
    description:
      "Badla is a 2019 Indian Hindi-language mystery thriller film directed by Sujoy Ghosh.",
    actors: ["Amitabh Bachchan", "Taapsee Pannu"],
    genre: "Crime, Drama, Mystery",
    image:
      "https://m.media-amazon.com/images/M/MV5BYjZiMzIzYTctNDViZi00OWNmLWFmN2YtMmI2OWJiZWViMmY3XkEyXkFqcGdeQXVyNTYwMzA0MTM@._V1_QL75_UY281_CR11,0,190,281_.jpg",
  },
];
function Cards() {
  return (
    <div className="d-flex flex-wrap justify-content-center">
      {movies.map((movie, index) => (
        <Card style={{ width: "28rem", margin: "10px" }} key={index}>
          <Card.Header>
            <Badge bg="primary">Now Showing</Badge>
          </Card.Header>
          <Card.Img variant="top" src={movie.image} alt={movie.title} />
          <Card.Body>
            <Card.Title>{movie.title}</Card.Title>
            <Card.Text>{movie.description}</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            {movie.actors.map((actor, i) => (
              <ListGroup.Item key={i}>{actor}</ListGroup.Item>
            ))}
          </ListGroup>
          <Card.Footer>
            <small className="text-muted">{movie.genre}</small>
          </Card.Footer>
        </Card>
      ))}
    </div>
  );
}

export default Cards;
