function Font() {
  document.getElementById("text").style.fontSize = "24pt";
}
function Color() {
  document.getElementById("text").style.color = "green";
  document.getElementById("text").style.textDecoration = "underline";
}
function Gangster() {
  document.getElementById("text").style.textTransform = "capitalize";
  var str = document.getElementById("text");
  var parts = str.split(".");
  str = parts.join("-izzle.");
}
