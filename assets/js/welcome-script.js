$(window).on("load", function () {
  $(".loader").fadeOut("fast");
});

// js var declarations begin

var displacementY = window.innerHeight / 20;
var debugMode = 0; // setting this to 1 will disable debug mode checkbox
const functionOnClick = 'surprise()';
const colorPalette = ["#f44336", "#e91e63", "#9c27b0", "#673ab7", "#3f51b5", "#2196f3", "#03a9f4", "#00bcd4", "#009688", "#4caf50", "#8bc34a", "#ffc107", "#ff9800", "#ff5722"];
const colorPalette2 = ["#ff1744", "#f50057", "#d500f9", "#651fff", "#3d5afe", "#2979ff", "#00b0ff", "#00e5ff", "#1de9b6", "#00e676", "#76ff03", "#c6ff00", "#ffea00", "#ffc400", "#ff9100", "#ff3d00"]; // more vibrant colors

// js var declarations end

// css var declarations begin

var transY = "translateY(".concat(0 - displacementY, "px)");
//console.log(transY);
document.getElementById("name-container").style.transform = transY;

let vh = window.innerHeight * 0.01;
// set --vh value to pixels
document.documentElement.style.setProperty('--vh', `${vh}px`);

// if window is resized, recalulate --vh value
window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01;
  //console.log(vh);
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

// css var declarations end

// name animation start

$(".refresh").click(function () {
  let char = 0; // index value
  let timer = setInterval(onTick, 50);

  function onTick() {
    const span = name.querySelectorAll('span')[char];
    //console.log(name.querySelectorAll('span')[char]);

    var randomColor = colorPalette[Math.floor(Math.random() * colorPalette.length)];
    //console.log(randomColor);

    /*anime({
      targets: '.refreshIcon',
      rotate: '+=10',
      easing: 'cubicBezier(0, 0, .01, 1)'
    });*/

    $(span).css("color", randomColor);

    char++;

    if (char === nameLetters.length) {
      clearInterval(timer);
      timer = null;
      return;
    };
  };
});

console.log("name detected: " + document.querySelector("#animate").textContent); // log name to console

const name = document.querySelector("#animate");
const nameLetters = name.textContent.split("");
name.textContent = ""; // delete original h1 content after saving to name

for (let i = 0; i < nameLetters.length; i++) {
  let char = (nameLetters[i] === " ") ? "&nbsp;" : nameLetters[i];
  name.innerHTML += '<span onClick="' + functionOnClick + '">' + char + "</span>";
}

function animateName() {
  let char = 0; // index value
  let timer = setInterval(onTick, 100);

  function onTick() {
    const span = name.querySelectorAll('span')[char];
    //console.log(name.querySelectorAll('span')[char]);

    var randomColor = colorPalette[Math.floor(Math.random() * colorPalette.length)];
    //console.log(randomColor);

    const opacityDuration = 100;

    //console.log(char);

    if (char % 2 == 0) {
      anime({
        targets: name.querySelectorAll('span')[char],
        opacity: {
          value: 1,
          duration: opacityDuration
        },
        translateY: {
          value: displacementY,
          duration: 500
        },
        color: {
          value: randomColor,
          easing: 'steps(1)',
          duration: 100
        }
      }); // end of if statement
    } else {
      anime({
        targets: name.querySelectorAll('span')[char],
        opacity: {
          value: 1,
          duration: opacityDuration
        },
        translateY: {
          value: displacementY + (displacementY / 4),
          duration: 500
        },
        color: {
          value: randomColor,
          easing: 'steps(1)',
          duration: 100
        }
      }); // end of else statement
    };
    char++;
    if (char === nameLetters.length) {
      clearInterval(timer);
      timer = null;
      return;
    };
  };
};

// name animation end

// debugging section

if (false) {
  window.onload = function () {
    var input = document.getElementById("debugMode");
    //var input = document.querySelector('input[type=checkbox]');

    function check() {
      var a = input.checked ? "checked" : "not checked";
      console.log(a);
      if (a == "checked") {
        var debugMode = 1;
        console.log("set debug mode to " + debugMode);
        $("*").css("border", "1px solid white");
        console.log("completed all debugging tasks");
      };
      if (a == "not checked") {
        var debugMode = 0;
        console.log("debugMode off");
        $("*").css("border", "0px solid white");
        console.log("set debug mode to " + debugMode);
        console.log("terminated all debugging tasks");
      };
    };

    input.onchange = check;
    check();
  };
};

if (false) {
  $("*").css("border", "1px solid white");
  console.log("completed all debugging tasks");
};

// debugging section end

// fun animation stuff

$("span").click(function () {
  const randomColor = colorPalette[Math.floor(Math.random() * colorPalette.length)];
  //console.log(randomColor);
  $(this).css("color", randomColor);
});

// more info section event handler

function surprise() {
  //console.log("surprise!");
};

// run functions

animateName();