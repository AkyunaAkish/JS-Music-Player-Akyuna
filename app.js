var i = document.getElementsByClassName('fa');
var song = document.getElementsByTagName('audio');
i[0].addEventListener('click', function(){
  i[0].classList.toggle('fa-stop');
  i[0].classList.toggle('fa-play');
  if (song[0].paused) {
    song[0].play();
    if(!song[2].paused){
      i[2].classList.toggle('fa-play');
      i[2].classList.toggle('fa-stop');
      song[2].pause();
    }
    if(!song[3].paused){
      i[3].classList.toggle('fa-play');
      i[3].classList.toggle('fa-stop');
      song[3].pause();
    }
    if(!song[1].paused){
      i[1].classList.toggle('fa-play');
      i[1].classList.toggle('fa-stop');
      song[1].pause();
    }
  }
  else {
    song[0].pause();
  }
});
i[1].addEventListener('click', function(){
  i[1].classList.toggle('fa-stop');
  i[1].classList.toggle('fa-play');
  if (song[1].paused) {
    song[1].play();
    if(!song[2].paused){
      i[2].classList.toggle('fa-play');
      i[2].classList.toggle('fa-stop');
      song[2].pause();
    }
    if(!song[3].paused){
      i[3].classList.toggle('fa-play');
      i[3].classList.toggle('fa-stop');
      song[3].pause();
    }
    if(!song[0].paused){
      i[0].classList.toggle('fa-play');
      i[0].classList.toggle('fa-stop');
      song[0].pause();
    }
  }
  else {
    song[1].pause();

  }
});
i[2].addEventListener('click', function(){
  i[2].classList.toggle('fa-stop');
  i[2].classList.toggle('fa-play');
  if (song[2].paused) {
    song[2].play();
    if(!song[0].paused){
      i[0].classList.toggle('fa-play');
      i[0].classList.toggle('fa-stop');
      song[0].pause();
    }
    if(!song[3].paused){
      i[3].classList.toggle('fa-play');
      i[3].classList.toggle('fa-stop');
      song[3].pause();
    }
    if(!song[1].paused){
      i[1].classList.toggle('fa-play');
      i[1].classList.toggle('fa-stop');
      song[1].pause();
    }
  }
  else {
    song[2].pause();
  }
});
i[3].addEventListener('click', function(){
  i[3].classList.toggle('fa-stop');
  i[3].classList.toggle('fa-play');
  if (song[3].paused) {
    song[3].play();
    if(!song[2].paused){
      i[2].classList.toggle('fa-play');
      i[2].classList.toggle('fa-stop');
      song[2].pause();
    }
    if(!song[0].paused){
      i[0].classList.toggle('fa-play');
      i[0].classList.toggle('fa-stop');
      song[0].pause();
    }
    if(!song[1].paused){
      i[1].classList.toggle('fa-play');
      i[1].classList.toggle('fa-stop');
      song[1].pause();
    }
  }
  else {
    song[3].pause();
  }
});
