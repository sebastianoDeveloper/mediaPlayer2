export class AutoPlay {

  constructor(video) {
    this.video = video
  }
  // run() {
  //   if (this.video) {
  //     this.video.mute()
  //     this.video.play()
  //     this.video.unmute()

  //   }
  // }
  run(player) {
    if (!player.muted) {
      player.muted = true;
    }
  //   if (player.media.autoplay || player.media.playsinline) {
      player.play();
  //   }
  }
}






// export default AutoPlay
