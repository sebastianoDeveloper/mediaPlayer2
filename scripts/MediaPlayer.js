export class MediaPlayer{
  constructor(config) {
    this.media = config.v;
    this.plugins = config.plugins || [];
    // deberia funcionar este codigo incluso cuando no haiga plugins
    this._initPlugins();
  }

  _initPlugins() {
    const player = {
      play: () => this.play(),
      pause: () => this.pause(),
      media: this.media,
      get muted() {
        return this.media.muted;
      },
      set muted(value) {
        this.media.muted = value;
        // if (value === true) {
        //   this.media.muted = true
        // } else {
        //   this.media.muted = false
        // }
      }
    };

    this.plugins.forEach(p => {
      p.run(this);
    });

  }
  play() {
    this.media.play();
  }
  pause() {
    this.media.pause();
  }
  toggleStart() {
   this.media.paused ? this.play() : this.pause();
  }
  mute() {
    this.media.muted = true
  }
  unmute() {
    this.media.muted = false
  }
  toggleMute() {
    // this.media.muted = !this.media.muted;
    this.media.muted ? this.unmute() : this.mute();
  }
}
// export default MediaPlayer