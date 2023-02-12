const theHeader = document.querySelector('.header');
const mainVideo = document.querySelector('.player__video');
const playBtn = document.querySelector('.player__buttons--play');
const pauseBtn = document.querySelector('.player__buttons--pause');

window.addEventListener('scroll', () => {
    if (pageYOffset > 100) {
        theHeader.style.background = "rgba(255, 255, 255, 0.87)";
        theHeader.style.backdropFilter = "blur(15px)";
        theHeader.style.paddingTop = "30px";
        theHeader.style.paddingBottom = "30px";
    } else {
        theHeader.style.background = "transparent";
        theHeader.style.backdropFilter = "blur(0px)";
        theHeader.style.paddingTop = "50px";
        theHeader.style.paddingBottom = "50px";
    }
})

playBtn.addEventListener('click', () => {
    mainVideo.play();
    playBtn.style.display = 'none';
    pauseBtn.style.display = 'block';
})

pauseBtn.addEventListener('click', () => {
    mainVideo.pause();
    playBtn.style.display = 'block';
    pauseBtn.style.display = 'none';
})

mainVideo.addEventListener('ended', () => {
    pauseBtn.style.display = 'none';
    playBtn.style.display = 'block';
})