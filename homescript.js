$(window).on("load", function () {
  $(".loader").fadeOut("slow");
});

var xRay = 0;
var debugMode = 0;
var boxFinalWidth = '60vw';
var boxInitialWidth = '20vw';
var animDuration = 800;

console.log("declared variables");

// css variable declarations

// use boxInitialWidth to set initial and final width in css
document.documentElement.style.setProperty('--initialWidth', boxInitialWidth);
document.documentElement.style.setProperty('--finalWidth', boxFinalWidth);

let vh = window.innerHeight * 0.01;
// set --vh value to pixels
document.documentElement.style.setProperty('--vh', `${vh}px`);

// if window is resized, recalulate --vh value
window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

// css var declarations end

/* redundant now that there is a dedicated checkbox function
function xRayMode() {
  console.log("initiated xRayMode function");
  console.log("debugMode is currently set at " + debugMode);
  if (debugMode == 1) {
    console.log("xRayMode proceeding with border assignment");
    $("*").css("border", "1px solid black");
  }
  console.log("completed xRayMode function");
}; */

window.onload = function () {
  var input = document.getElementById("debugMode");
  //var input = document.querySelector('input[type=checkbox]');

  function check() {
    var a = input.checked ? "checked" : "not checked";
    console.log(a);
    if (a == "checked") {
      var debugMode = 1;
      console.log("set debug mode to " + debugMode);
      $("*").css("border", "1px solid black");
      console.log("completed all debugging tasks");
    };
    if (a == "not checked") {
      var debugMode = 0;
      console.log("debugMode off");
      $("*").css("border", "0px solid black");
      console.log("set debug mode to " + debugMode);
      console.log("terminated all debugging tasks");
    };
  };
  input.onchange = check;
  check();
};

$(document).ready(function () {
  $(".info-container").hover(function () {

    // animation end
    anime({
      targets: this,
      width: boxFinalWidth,
      easing: 'easeOutElastic(1, .8)',
      duration: animDuration
    });

    $(".title").css("background-color", "black");

    $(".name h1").css("opacity", "0");

    // for debugging use
    if (debugMode == 1) {
      console.log(thisElement);
    }

    // jquery .fadeIn method works!
    $(this).children("a").fadeIn("fast");

  }, function () {

    $(".title").css("background-color", "#F67AC1");

    $(".name h1").css("opacity", "1");

    // delay the display change
    // $(this).children("a").css("display", "none");

    anime({
      targets: this,
      width: boxInitialWidth,
      easing: 'easeOutElastic(1, .8)',
      duration: animDuration
    });

    $(this).children("a").fadeOut("fast");

  });
});