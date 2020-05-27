'use strict'


let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}


let playButton = document.getElementById('play');
let pauseButton = document.getElementById('pause');
let slideInterval;

function pause() {
    playButton.style.display = 'block';
    pauseButton.style.display = 'none';
    clearInterval(slideInterval);
}

function play() {
    playButton.style.display = 'none';
    pauseButton.style.display = 'block';
    slideInterval = setInterval(showAuto,2000);
}

function showAuto() {
    let j;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (j = 0; j < slides.length; j++) {
        slides[j].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    for (j = 0; j < dots.length; j++) {
        dots[j].className = dots[j].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}


