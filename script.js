// use variables to make your code shorter
var j1;
var j2;
var j3;
var j4;

// declare your functions
function gt31() {
  document.getElementById("img1").classList.remove("image1");
  document.getElementById("img1").classList.add("image1-2");
  document.getElementById("img2").classList.remove("image2");
  document.getElementById("img2").classList.add("image2-1");
  document.getElementById("mvsound").play();
  document.getElementById("engine").pause();
}

function playsound() {
  document.getElementById("engine").play();
  document.getElementById("mvsound").pause();
}
