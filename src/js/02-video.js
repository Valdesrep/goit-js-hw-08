import Player from "@vimeo/player";
import throttle from 'lodash.throttle';

const saveTimeVideo = "videoplayer-current-time";

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const currentTime = localStorage.getItem(saveTimeVideo)

if (currentTime){
    player.setCurrentTime(currentTime);
}

player.on('timeupdate', throttle((event) => {
    localStorage.setItem(saveTimeVideo, event.seconds)    
}, 1000) );