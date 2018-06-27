const left = document.querySelector('.left');
const right = document.querySelector('.right');
const container = document.querySelector('.container');

left.addEventListener('mouseenter', () => {
    container.classList.add('hover-left');
    document.getElementById("middle").style.opacity = "0";
});

document.addEventListener('gesturestart', function (e) {
    e.preventDefault();
});

left.addEventListener('touchstart', () => {
    container.classList.add('hover-left');
    document.getElementById("middle").style.opacity = "0";
});

left.addEventListener('touchend', () => {
    container.classList.remove('hover-left');
    document.getElementById("middle").style.transition = "all 1500ms";
    document.getElementById("middle").style.opacity = "1";
});

left.addEventListener('mouseleave', () => {
    container.classList.remove('hover-left');
    document.getElementById("middle").style.transition = "all 1500ms";
    document.getElementById("middle").style.opacity = "1";
});


right.addEventListener('touchstart', () => {
    container.classList.add('hover-right');
    document.getElementById("middle").style.opacity = "0";
});

right.addEventListener('mouseenter', () => {
    container.classList.add('hover-right');
    document.getElementById("middle").style.opacity = "0";
});

right.addEventListener('mouseleave', () => {
    container.classList.remove('hover-right');
    document.getElementById("middle").style.transition = "all 1500ms";
    document.getElementById("middle").style.opacity = "1";
});

right.addEventListener('touchend', () => {
    container.classList.remove('hover-right');
    document.getElementById("middle").style.transition = "all 1500ms";
    document.getElementById("middle").style.opacity = "1";
});