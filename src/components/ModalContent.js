import React, {useEffect, useState} from 'react'
import YouTube from 'react-youtube';
import axios from 'axios';

const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

const ModalContent = () => {
    const [videoID, setVideoID] = useState('')
    const [youtubeLink, setYoutubeLink] = useState('')

      const fetchVideo = async () => {
        const { data } = await axios.get(
            `http://localhost:3000/movies`
        );
        setVideoID(data?.results[0].videoID)
        console.log(data)
      };

        useEffect(() => {
            fetchVideo();
        }, []);

    return <YouTube videoId={videoID} opts={opts} />;
};

export default ModalContent