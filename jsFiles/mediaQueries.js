const mobileNavView = document.getElementById("mobile-nav_view");
const gameStory = document.getElementById("game-story");

function checkAndResize() {
  const imgArtist = document.querySelector(".artist");
  const imgCupid = document.querySelector(".cupid");
  const imgHannah = document.querySelector(".hannah");
  const imgMusician = document.querySelector(".musician");
  const imgFour = document.querySelector("#game-story .img-container .imgFour");
  const imgThree = document.querySelector(
    "#game-story .img-container .imgThree"
  );
  const imgTwo = document.querySelector("#game-story .img-container .imgTwo");
  const imgOne = document.querySelector("#game-story .img-container .imgOne");
  const textContainer = document.querySelector(".text-container");

  var currentWidth = window.innerWidth;
  var currentHeight = window.innerHeight;

  if (currentHeight <= 700 && currentWidth >= 350 && currentWidth <= 500) {
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
    imgFour.style.width = "215px";
    imgThree.style.width = "215px";
    imgTwo.style.width = "215px";
    imgOne.style.width = "215px";
    gameStory.style.padding = "0 12px";
    textContainer.style.scale = "0.85";
    textContainer.style.alignItems = "center";
    textContainer.style.padding = "0";
    textContainer.style.width = "100%";
  } else {
    mobileNavView.style.background = "";
    imgArtist.style.scale = "";
    imgArtist.style.top = "";
    imgArtist.style.right = "";
    imgCupid.style.right = "";
    imgCupid.style.scale = "";
    imgCupid.style.top = "";
    imgCupid.style.scale = "";
    imgHannah.style.scale = "";
    imgHannah.style.top = "";
    imgHannah.style.left = "";
    imgMusician.style.scale = "";
    imgMusician.style.top = "";
    imgFour.style.width = "";
    imgThree.style.width = "";
    imgTwo.style.width = "";
    imgOne.style.width = "";
    gameStory.style.padding = "";
    textContainer.style.scale = "";
    textContainer.style.alignItems = "";
    textContainer.style.padding = "";
    textContainer.style.width = "";
  }
}
window.onload = function () {
  checkAndResize();
};

window.onresize = function () {
  checkAndResize();
};
