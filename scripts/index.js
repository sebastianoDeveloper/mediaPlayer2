import {MediaPlayer} from "./MediaPlayer.js";
// import MediaPlayer from "./MediaPlayer.js";
import {AutoPlay} from "./plugins/AutoPlay.js";
// import AutoPause from "./plugins/AutoPause.js";

const video = document.querySelector('video');
const player = new MediaPlayer({
  v: video,
  plugins: [
    new AutoPlay(false),
    // new AutoPause(),
  ]
});
const btnPrincipal = document.querySelector('.btn_principal');
btnPrincipal.onclick = () => player.toggleStart()

const btnMute = document.querySelector('.btn_mute');
btnMute.onclick = () => player.toggleMute()

// Ensure user interaction before attempting to play the video
// btn_play.onclick = () => {
//   player.toggleReproduction();
// };

// btn_mute.onclick = () => player.toggleMute();

// if ('serviceWorker' in navigator) {
//   navigator.serviceWorker.register(new URL('/sw.js', import.meta.url)).catch(error => {
//     console.log(error.message);
//   });
// }
