// console.log = function() {}; // turn off console logging

const ele = document.getElementById('c');
ele.style.cursor = 'grab';

let pos = {
    top: 0,
    left: 0,
    x: 0,
    y: 0
};

const mouseDownHandler = function (e) {
    ele.style.userSelect = 'none';

    pos = {
        left: ele.scrollLeft,
        top: ele.scrollTop,
        x: e.clientX,
        y: e.clientY,
    };

    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);
};

const mouseMoveHandler = function (e) {
    const dx = e.clientX - pos.x;
    const dy = e.clientY - pos.y;

    ele.scrollTop = pos.top - dy;
    ele.scrollLeft = pos.left - dx;
};

const mouseUpHandler = function () {
    ele.style.removeProperty('user-select');

    document.removeEventListener('mousemove', mouseMoveHandler);
    document.removeEventListener('mouseup', mouseUpHandler);
};

ele.addEventListener('mousedown', mouseDownHandler);

$(window).on("load",function(){
    $(".loader").fadeOut("slow");
});

var titleRect = document.querySelector(".message-title").getBoundingClientRect();
console.log(titleRect.top);
console.log(window.innerHeight);
var displacementY = ( window.innerHeight / 100 ) * 10;
console.log("displacementY is " + displacementY);

var transY = "translateY(".concat( displacementY, "px)");
console.log(transY);
document.querySelector(".message-title").style.transform = transY;

let vh = window.innerHeight * 0.01;
let vw = window.innerWidth * 0.01;
if (window.innerWidth > window.innerHeight) {
    vmax = window.innerWidth * 0.01;
} else {
    vmax = window.innerHeight * 0.01;
};

// set --vh value to pixels
document.documentElement.style.setProperty('--vmax', `${vmax}px`);
document.documentElement.style.setProperty('--vh', `${vh}px`);
document.documentElement.style.setProperty('--vw', `${vw}px`);

// if window is resized, recalulate --vh value
window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    let vw = window.innerWidth * 0.01;
    if (window.innerWidth > window.innerHeight) {
        vmax = window.innerWidth * 0.01;
    } else {
        vmax = window.innerHeight * 0.01;
    };
    console.log(vh);
    console.log(vw);
    console.log(vmax);
    document.documentElement.style.setProperty('--vmax', `${vmax}px`);
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    document.documentElement.style.setProperty('--vw', `${vw}px`);
});

// title animation start

console.log("title message detected: " + document.querySelector(".message-title").textContent); // log name to console

const title = document.querySelector(".message-title");
const description = document.querySelector(".page-description");
const enter = document.querySelector(".enter");

var steps = 0;
var enterButtonLoad = 0;
var update = 0;

function animateTitle() {
    console.log(title);
    console.log(titleRect.top);
    anime({ // move title back up
        targets: title,
        delay: 500, //delay after website loads
        opacity: {
        value: 1,
        duration: 2500,
        },
        color: {
        value: '#000',
        duration: 2000
        },
        translateY: {
        value: 0,
        duration: 2500,
        easing: 'cubicBezier(0,.5,0,1)'
        }
    });
    anime({ // fade in description
        targets: description,
        opacity: 1,
        duration: 5000,
        delay: 1500
    });    
    anime({ // fade in enter button
        targets: enter,
        opacity: 1,
        duration: 5000,
        delay: 3000,
        update: function() {
            if (enterButtonLoad == 0) {
                if (update >= 100) {
                    enterButtonLoad = 1;
                    console.log(update);
                } else {
                    update++;
                };
            }
        }
    }); 
};

function enterPage() {
    if (enterButtonLoad == 1) {
    $(".welcome").fadeOut("fast");

    // complicated fancy animation

    /* a = document.querySelector(".a div")
    anime({
        targets: a,
        width: '100%',
        easing: 'cubicBezier(0,.5,0,1)',
        delay: 500
    }); */
    };
}

animateTitle();