import React from "react"
import FadeIn from 'react-fade-in';

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
        <FadeIn delay="500">
            <div style={homeStyle}>
                <h1>Welcome Jabronis!</h1>
                <p> Here you'll be able to find some of the Top 10 Greatest Movies OF ALL TIME.</p>
                <p> Click "Your Movies" to add your favorite movies! </p>
                <p> We've added a few of our own, so we can compare tastes. </p>
                <p> Check them out under our "Our Movies" tab. </p>
                <br></br>
                <p> Donate $6 to Tommy's Halal Addiction. </p>
                <p> If you're feeling generous, make it $8 so he can get double meat! </p>
                <img src='https://media-exp1.licdn.com/dms/image/D4E35AQFQewI9_93dVg/profile-framedphoto-shrink_800_800/0/1661219766637?e=1661976000&v=beta&t=22mYXojAUvTO20dQ3y4Awv3hae7KRnrv5loLE0WSZpg' width={250} height={250} alt="Tommy" />
                {' '}
                <img src='https://upload.wikimedia.org/wikipedia/commons/2/2f/Rickrolling_QR_code.png?20200615212723' width={250} height={250} alt='Rick' />
            </div>
        </FadeIn>
    )
  }

  export default Home 