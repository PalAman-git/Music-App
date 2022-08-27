const songName = document.querySelector("#songName");
const ArtistName = document.querySelector("#ArtistName");
const PrevButton = document.querySelector(".prev-track");
const PlayPauseButton = document.querySelector(".playpause-track");
const nextButton = document.querySelector(".next-track");
const InnerImage = document.getElementById("innerCircle");
const centerButton=document.querySelector('.centerButton');
let random = Math.floor(Math.random() * 4);
let i;
i = random;

// Array of objects
let SongDetail = [
  { Artist: "Sidhu", song: "Aj kal Ve" },
  { Artist: "Elley Duhe", song: "M nights" },
  { Artist: "Desiigner", song: "Panda" },
  { Artist: "Shubh", song: "No Love" },
];

//functions

let currentsong = new Audio(`./music/audio${i}.mp3`);
//play function
const play = () => {
  if (currentsong.paused || currentsong.currentTime == 0) {
    currentsong.play();
    InnerImage.classList.add("Rotate");
    centerButton.classList.remove('fa-play-circle');
    centerButton.classList.add('fa-pause-circle');
  } else {
    InnerImage.classList.remove("Rotate");
    centerButton.classList.remove('fa-pause-circle');
    centerButton.classList.add('fa-play-circle');
    currentsong.pause();

  }
  

  songName.innerHTML = `<h4>${SongDetail[i].song}</h4>`;
  ArtistName.innerHTML = `<h4>${SongDetail[i].Artist}</h4>`;
  InnerImage.style.backgroundImage=`url(./picture/Picture${i}.jpg)`; 

  // InnerImage.style.background(`url(./picture/Picture${i}.jpg)`);
};

const prev = () => {
  if (!currentsong.paused) {
    currentsong.pause();
  }
  if (i === 0) {
    i = 3;
  } else {
    i--;
  }
  currentsong = new Audio(`./music/audio${i}.mp3`);
  currentsong.play();
  songName.innerHTML = `<h4>${SongDetail[i].song}</h4>`;
  ArtistName.innerHTML = `<h4>${SongDetail[i].Artist}</h4>`;
  InnerImage.style.backgroundImage=`url(./picture/Picture${i}.jpg)`; 

};

const next = () => {
  if (!currentsong.paused) {
    currentsong.pause();
  }
  if (i === 3) {
    i = 0;
  } else {
    i++;
  }
  currentsong = new Audio(`./music/audio${i}.mp3`);
  currentsong.play();
  songName.innerHTML = `<h4>${SongDetail[i].song}</h4>`;
  ArtistName.innerHTML = `<h4>${SongDetail[i].Artist}</h4>`;
  InnerImage.style.backgroundImage=`url(./picture/Picture${i}.jpg)`; 

};

//eventlistners
PlayPauseButton.addEventListener("click", play);
PrevButton.addEventListener("click", prev);
nextButton.addEventListener("click", next);
