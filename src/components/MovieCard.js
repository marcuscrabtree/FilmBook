import React from "react";

function MovieCard({ movie }) {

  const movieStyle = {
    textAlign: "center",
    padding: "10px",
    listStyle: "none",
    margin: "1rem",
    marginTop: "0.5rem",    
    backgroundColor: "black",
    color: "white",
    width: "50rem",
    marginLeft: "auto",
    marginRight: "auto",
  }
  

  const {image, name, description } = movie;


  return (
    <ul  style={movieStyle}
    className="card text-center">
      <div className="e-card">
        <div className="e-card-content">
          <img width="125" src={image} alt={name} className="rounded mx-auto d-block" style={{
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            width: "100%",
            }} />
        </div>
      </div>
      <div className="content"></div>
      <div className="details">
        <strong>{name}</strong>
      </div> 
      <div>
      <h7>Description: {description}</h7> 

      </div>
    </ul>
  );
}

export default MovieCard;
