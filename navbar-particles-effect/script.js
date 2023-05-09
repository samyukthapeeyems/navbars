let hamburger = document.getElementById("hamburger");
let nav = document.getElementById("nav");
let text = document.getElementById("hero");
nav.style.width = "0px";
hamburger.onclick = () => {
  if (nav.style.width == "0px") {
    nav.style.width = "100%";
    hamburger.style.color = "white";
    text.style.opacity = "0";
  }
  else {
    nav.style.width = "0px";
    hamburger.style.color = "rgb(206, 31, 31)";
    text.style.opacity = "1";
  }
} 