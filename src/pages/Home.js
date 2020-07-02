import React, {useState, useEffect} from 'react';
import ReactHowler, {Howl, Howler} from 'howler';

function Home(props) {

    const [playingState, setPlayingState] = useState(false)
    const [currentTime, setCurrentTime] = useState(0)

    useEffect(
        setInterval(() => {
            setCurrentTime(audio.seek())
          }, 1000)
    )
      
    
     const time_convert= (secs) =>
     { 
      let minutes = Math.floor(secs / 60) || 0;
      let seconds = Math.floor(secs - minutes * 60) || 0;
      if(secs){
      return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
      }        
    }

    const audio= new Howl({
        src: ['https://www.westernsydney.edu.au/__data/assets/file/0020/160319/Brief_Relaxation_Session_with_background_music.mp3'],
        format: ['mp3'],
        autoplay: false,
        loop: false,
        volume: 0.5,
      });
    
    const handlePlay = () => {
        if(playingState === false){
            audio.play()
            setPlayingState(true)
        }else{
            audio.pause()
            setPlayingState(false)
        }
    };


    return (
        <div>
            <div className='toggle'>
            {playingState === false && 
            (<button className='play' onClick={handlePlay}><span>play</span></button>  )}
            {playingState === true && 
            (<button className='play' onClick={handlePlay}><span>pause</span></button>)}
            
            </div>
            <div className='time'>{time_convert(currentTime)}</div>
        </div>
    );
}

export default Home;