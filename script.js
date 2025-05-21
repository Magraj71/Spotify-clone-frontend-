console.log("Welcome to Spotify");

let Index = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById("masterplay");
let myProgressBar = document.getElementById('myProgressBar');
let songTitle = document.getElementById('songTitle'); // Add this to display song title
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songitem')); // Corrected to songItems
let next  = document.getElementById('next');
let pre = document.getElementById('pre');
let mastersongname = document.getElementsByClassName("mastersongname");

let songs = [
  { songName: "Salam-e-ishq", filepath: 'songs/1.mp3', coverpath: 'covers/1.jpg'},
  { songName: "Song 2", filepath: 'songs/2.mp3', coverpath: 'covers/2.jpg'},
  { songName: "Song 3", filepath: 'songs/3.mp3', coverpath: 'covers/3.jpg'},
  { songName: "Song 4", filepath: 'songs/4.mp3', coverpath: 'covers/4.jpg'},
  { songName: "Song 5", filepath: 'songs/5.mp3', coverpath: 'covers/5.jpg'},
  { songName: "Song 5", filepath: 'songs/6.mp3', coverpath: 'covers/6.jpg'},
  { songName: "Song 5", filepath: 'songs/7.mp3', coverpath: 'covers/7.jpg'},
];

songItems.forEach((element, i) => {
    console.log(element,i)
  element.getElementsByTagName("img")[0].src = songs[i].coverpath;
  element.getElementsByClassName("songname")[0].innerHTML=songs[i].songName;
  
});


// Play / Pause Button Functionality
masterPlay.addEventListener('click', () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove('fa-pause-circle');
    masterPlay.classList.add('fa-play-circle');
    gif.style.opacity = 0;
  }
//   mastersongname.innerHTML = songs[Index].songName;  

});

audioElement.addEventListener('timeupdate', () => {
  // console.log('timeupdate');
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  myProgressBar.value = progress;
});

myProgressBar.addEventListener('change', () => {
  audioElement.currentTime = (myProgressBar.value * audioElement.duration) / 100;
});

// Enhancements (functions not included here)
function updateSongTitle() {
  songTitle.innerText = songs[songIndex].songName;
}

// Next/Previous Song Functionality (example)
function playNextSong() {
  // Handle playing the next song and update elements

}
let makeallplay = ()=>{
    Array.from(document.getElementsByClassName("songplay")).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName("songplay")).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        console.log(e.target)
        makeallplay();
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        Index  = parseInt(e.target.id);
        audioElement.src = `songs/${Index+2}.mp3`;
        mastersongname.innerText = songs[Index].songName;

        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
    })
})

next.addEventListener('click',()=>{
    if(Index>7){
        Index=0;
    }
    else{
        Index = Index+1;
    }
    audioElement.src=`songs/${Index}.mp3`;
    mastersongname.innerText = songs[Index].songName;

    audioElement.play();
    audioElement.currentTime=0;
    gif.style.opacity
})
pre.addEventListener('click',()=>{
    if(Index<=0){
        Index=7;
    }
    else{
        Index = Index-1;
    }
    audioElement.src=`songs/${Index}.mp3`;
    mastersongname.innerText = songs[Index].songName;
    audioElement.play();
    audioElement.currentTime=0;
    gif.style.opacity
})