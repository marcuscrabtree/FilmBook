// this is where users add their own list using a form
import React, {useState, useEffect} from "react";
import MovieCard from "./MovieCard";


function TopMovieList() {
    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [description, setDescription] = useState("")
    const [moviesList, setMoviesList] = useState([])

  const topMovieListStyle = {
    backgroundSize: "cover",
        textAlign: "center",
        contentAlign: "center",
        color: "white",
        fontSize: "25px",
        width: '100vw',
        height: '100vh',
        textShadow: "0 0 10px black",
    }
  

  useEffect(() => {
    fetch("http://localhost:3000/topList")
      .then((r) => r.json())
      .then((newMovieArray) => {
      setMoviesList(newMovieArray)
    })
  }, [])

  function handleAddMovie(newMovie) {
    const updatedMovieArray = [...moviesList, newMovie]
    setMoviesList(updatedMovieArray)
  }
  
  
  function handleNewMovie(e) {
      e.preventDefault()
        fetch("http://localhost:3000/topList", {
            method: "POST", 
            headers: {
                "Content-Type": "application/json", 
            },
            body: JSON.stringify({
                name:name,
                image:image,
                description:description
            })
        }).then((resp) => resp.json())
        
        .then((newMovie) => handleAddMovie(newMovie))

    }

    return (
      <div style={topMovieListStyle}>
        <h1>Add your film here!</h1>     
        <form onSubmit={handleNewMovie}>
          <div>
            <input type="text" name="movie name" placeholder="Add Movie" value={name} onChange={(e)=> setName (e.target.value)} />
          </div>
          <div>
            <input type="text" name="image" placeholder="Image" value={image} onChange={(e)=> setImage (e.target.value)} />
          </div>
          <div>
            <input type="text" name="description" placeholder="Description" value={description} onChange={(e)=> setDescription (e.target.value)} />
          </div>
          <input type="submit" value="Submit" />
        </form>
          {
            moviesList.map((movie) => {
              return <MovieCard movie={movie}/>
            })
          }
            
        
      </div>
    );
  }

export default TopMovieList