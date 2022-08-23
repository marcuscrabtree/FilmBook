import React from "react"

function Home() {

    const homeStyle = {
        backgroundSize: "cover",
        padding: "10px 5px",
        textAlign: "center",
        contentAlign: "center",
        color: "white",
        fontSize: "25px",
        backgroundColor: 'black',
        width: '100vw',
        height: '100vh',
        textShadow: "0 0 10px black",
    }

    return (
        <div style={homeStyle}>
            <h1>Welcome!</h1>
            <h2></h2>
            <p> Hello, Jabronis! You looking to add a movie to our short but sweet list?! </p>
            <p> Click "Your Top List" to add your favorite movies! </p>
            <p> We've added a few of our own, so we can compare tastes. </p>
            <p> Check them out under our "All Movies" tab. </p>
            <p> Take Care, Brush Your Hair! </p>
        </div>
    )
  }

  export default Home 