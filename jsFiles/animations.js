const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

const fadeElement = document.querySelectorAll(".objects");
fadeElement.forEach((el) => observer.observe(el));

const hannahText = document.querySelector(".hannahText");
const hannahImg = document.querySelector(".hannah");
const ArtistImg = document.querySelector(".artist");
const ArtistText = document.querySelector(".ArtistText");
const musicianImg = document.querySelector(".musician");
const musicianText = document.querySelector(".musicianText");
const coderImg = document.querySelector(".cupid");
const coderText = document.querySelector(".coderText");

hannahText.addEventListener("mouseover", () => {
  hannahImg.classList.add("startHannahMove");
  ArtistImg.classList.add("dimImg");
  ArtistText.classList.add("dimImg");
  musicianImg.classList.add("dimImg");
  musicianText.classList.add("dimImg");
  coderImg.classList.add("dimImg");
  coderText.classList.add("dimImg");
  hannahText.classList.add("addFontWeight");
});

hannahText.addEventListener("mouseout", () => {
  hannahImg.classList.remove("startHannahMove");
  ArtistImg.classList.remove("dimImg");
  ArtistText.classList.remove("dimImg");
  musicianImg.classList.remove("dimImg");
  musicianText.classList.remove("dimImg");
  coderImg.classList.remove("dimImg");
  coderText.classList.remove("dimImg");
  hannahText.classList.remove("addFontWeight");
});
/* ---------------------------------- */
ArtistText.addEventListener("mouseover", () => {
  ArtistImg.classList.add("startArtistMove");
  hannahText.classList.add("dimImg");
  hannahImg.classList.add("dimImg");
  musicianImg.classList.add("dimImg");
  musicianText.classList.add("dimImg");
  coderImg.classList.add("dimImg");
  coderText.classList.add("dimImg");
  ArtistText.classList.add("addFontWeight");
});

ArtistText.addEventListener("mouseout", () => {
  ArtistImg.classList.remove("startArtistMove");
  hannahText.classList.remove("dimImg");
  hannahImg.classList.remove("dimImg");
  musicianImg.classList.remove("dimImg");
  musicianText.classList.remove("dimImg");
  coderImg.classList.remove("dimImg");
  coderText.classList.remove("dimImg");
  ArtistText.classList.remove("addFontWeight");
});

/* ------------------------------ */

musicianText.addEventListener("mouseover", () => {
  musicianImg.classList.add("startMusicianMove");
  hannahText.classList.add("dimImg");
  hannahImg.classList.add("dimImg");
  ArtistImg.classList.add("dimImg");
  ArtistText.classList.add("dimImg");
  coderImg.classList.add("dimImg");
  coderText.classList.add("dimImg");
  musicianText.classList.add("addFontWeight");
});

musicianText.addEventListener("mouseout", () => {
  musicianImg.classList.remove("startMusicianMove");
  hannahText.classList.remove("dimImg");
  hannahImg.classList.remove("dimImg");
  ArtistText.classList.remove("dimImg");
  ArtistImg.classList.remove("dimImg");
  coderImg.classList.remove("dimImg");
  coderText.classList.remove("dimImg");
  musicianText.classList.remove("addFontWeight");
});

/* ---------------------------------startCoderMove */

coderText.addEventListener("mouseover", () => {
  coderImg.classList.add("startCoderMove");
  hannahText.classList.add("dimImg");
  hannahImg.classList.add("dimImg");
  ArtistImg.classList.add("dimImg");
  ArtistText.classList.add("dimImg");
  musicianImg.classList.add("dimImg");
  musicianText.classList.add("dimImg");
  coderText.classList.add("addFontWeight");
});

coderText.addEventListener("mouseout", () => {
  coderImg.classList.remove("startCoderMove");
  hannahText.classList.remove("dimImg");
  hannahImg.classList.remove("dimImg");
  ArtistText.classList.remove("dimImg");
  ArtistImg.classList.remove("dimImg");
  musicianImg.classList.remove("dimImg");
  musicianText.classList.remove("dimImg");
  coderText.classList.remove("addFontWeight");
});
