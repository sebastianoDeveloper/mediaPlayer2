class AutoPause{
  constructor() {
    this.threshold = 0.25
    this.handleIntersection = this.handleIntersection.bind(this);
    this.handleVisibilityChange = this.handleVisibilityChange.bind(this);
  }
  run(player) {
    this.player = player;
    this.isPlaying = false;
    const observer = new IntersectionObserver(this.handleIntersection, {
      threshold: this.threshold,
    });
    observer.observe(this.player.media);

    document.addEventListener('visibilitychange',this.handleVisibilityChange);
  }
  handleIntersection(entries) {
    const entry = entries[0];
    const isVisible = entry.intersectionRatio > this.threshold;
    if (isVisible && this.isPlaying) {
      this.player.play();
    } else if (!isVisible) {
      this.isPlaying = !this.player.media.paused;
      this.player.pause();
    }
  }

  handleVisibilityChange() {
    if (document.visibilityState === 'visible' && this.isPlaying) {
      this.player.play();
    } else if (document.visibilityState === 'hidden') {
      this.isPlaying = !this.player.media.paused;
      this.player.pause();
    }
  }
  // handleIntersection(entries) {
  //   const entry = entries[0]
  //   const isVisible = entry.intersectionRatio > this.threshold;
  //   isVisible ? this.player.play() : this.player.pause()
  // }
  // handleVisibilityChange() {
  //   const isVisible = document.visibilityState === 'visible'
  //   isVisible ? this.player.play() : this.player.pause()
  // }
}





export default AutoPause