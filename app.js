const songName = document.querySelector("#songName");
const ArtistName = document.querySelector("#ArtistName");
const PrevButton = document.querySelector(".prev-track");
const PlayPauseButton = document.querySelector(".playpause-track");
const nextButton = document.querySelector(".next-track");
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
  } else {
    currentsong.pause();
  }
  songName.innerHTML = `<h4>${SongDetail[i].song}</h4>`;
  ArtistName.innerHTML = `<h4>${SongDetail[i].Artist}</h4>`;
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
  ArtistName.innerHTML = `<h4>${SongDetail[i].Artist}</h4>`;
  songName.innerHTML = `<h4>${SongDetail[i].song}</h4>`;
};

//eventlistners
PlayPauseButton.addEventListener("click", play);
PrevButton.addEventListener("click", prev);
nextButton.addEventListener("click", next);