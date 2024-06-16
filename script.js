const video = document.getElementById('myVideo');
const playPauseBtn = document.getElementById('playPauseBtn');
const stopBtn = document.getElementById('stopBtn');

function togglePlayPause() {
    if (video.paused || video.ended) {
        playVideo();
    } else {
        pauseVideo();
    }
}

function playVideo() {
    video.play();
    playPauseBtn.textContent = 'Pause';
}

function pauseVideo() {
    video.pause();
    playPauseBtn.textContent = 'Play';
}

function stopVideo() {
    video.pause();
    video.currentTime = 0;
    playPauseBtn.textContent = 'Play';
}
