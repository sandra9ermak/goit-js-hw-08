const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('timeupdate', throttle(data => {
    localStorage.setItem("videoplayer-current-time", data.seconds);
  }, 1000));

let time = localStorage.getItem("videoplayer-current-time") || 0;

player.setCurrentTime(time);
