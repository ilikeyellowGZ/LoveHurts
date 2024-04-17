const mobileNavView = document.getElementById("mobile-nav_view");

function checkAndResize() {
  const imgArtist = document.querySelector(".artist");
  const imgCupid = document.querySelector(".cupid");
  const imgHannah = document.querySelector(".hannah");
  const imgMusician = document.querySelector(".musician");
  const gameStoryImgs = document.querySelectorAll(
    "#game-story .img-container img"
  );

  var currentWidth = window.innerWidth;
  var currentHeight = window.innerHeight;

  if (
    currentHeight <= 720 &&
    currentHeight >= 660 &&
    currentWidth >= 350 &&
    currentWidth <= 500
  ) {
    mobileNavView.style.background = "black";
    imgArtist.style.scale = "0.6";
    imgArtist.style.top = "80%";
    imgArtist.style.right = "10%";
    imgCupid.style.right = "10%";
    imgCupid.style.scale = "0.5";
    imgCupid.style.top = "1%";
    imgCupid.style.scale = "0.5";
    imgHannah.style.scale = "0.5";
    imgHannah.style.top = "80%";
    imgHannah.style.left = "10%";
    imgMusician.style.scale = "0.5";
    imgMusician.style.top = "1%";
    gameStoryImgs.style.height = "205px";
  } else {
  }
}

window.onload = function () {
  checkAndResize();
};

window.onresize = function () {
  checkAndResize();
};
