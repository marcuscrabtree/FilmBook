import React from "react";
import AppModal from "./AppModal";
import ModalContent from "./ModalContent";

function MovieCard({ movie }) {

  const movieStyle = {
    textAlign: "center",
    padding: "30px",
    listStyle: "none",
    margin: "1rem",
    marginTop: "0.5rem",    
    backgroundColor: "black",
    color: "white"
  }
  

  const {image, name, description } = movie;


  return (
    <ul  style={movieStyle}
    className="card text-center">
      <div className="image">
        <div className="ui fluid image">
          <img src={image} alt={name} className="card-img-top"/>
        </div>
      </div>
      <div className="content"></div>
      <div className="details">
        <strong>{name}</strong>
      </div> 
      <div>
      <h5>{description}</h5>
        <AppModal id={movie.id}> 
          <li>
            <br></br>
            <button variant ="outlined" style={{color:"white", backgroundColor:"black"}}>
            View Trailer
            </button>
          </li>
        </AppModal>
      </div>
    </ul>
  );
}

export default MovieCard;
