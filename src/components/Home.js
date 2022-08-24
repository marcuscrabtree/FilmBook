import React from "react"

function Home() {

    const homeStyle = {
        backgroundSize: "cover",
        padding: "10px 5px",
        textAlign: "center",
        contentAlign: "center",
        color: "white",
        fontSize: "25px",
        width: '100vw',
        height: '100vh',
        textShadow: "0 0 10px black",
    }

    return (
        <div style={homeStyle}>
            <h1>Welcome Jabronis!</h1>
            <p> You looking to add a movie to our short but sweet list?! </p>
            <p> Click "Your Movies" to add your favorite movies! </p>
            <p> We've added a few of our own, so we can compare tastes. </p>
            <p> Check them out under our "Our Movies" tab. </p>
            <p> Take Care, Brush Your Hair! </p>
        </div>
    )
  }

  export default Home 