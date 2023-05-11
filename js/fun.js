$(window).on('load', function(){
    $('.loading-overlay .sk-cube-grid').fadeOut(1000,function(){
        $(this).parent().fadeOut(2000,function(){
            $('body').css('overflow','auto');
        })
    });
});

$(document).ready(function(){
    var scrollButton = $('.arrow-up');

    // Show and Hide scrollButton
    $(window).scroll(function(){
        $(this).scrollTop() >= 1500 ? scrollButton.show() : scrollButton.hide();
    });

    // Click On scrollButton
    $(scrollButton).click(function(){
        $('html,body').animate({scrollTop: 0}, 600);
    });
});

// Active Slider

function* forwardNumber(i) {
    yield i + 1;
}

function* backwardNumber(i) {
    yield i - 1;
}

let slides = document.querySelectorAll('.slider .slide');
let Dots = document.querySelectorAll('.circles li');
let rightArrow = document.querySelector('.change-right');
let leftArrow = document.querySelector('.change-left');

// Change Slides
rightArrow.addEventListener('click', () => {
    let nextSlide;
    slides.forEach((slide, index) => {
        if(slide.classList.contains('activeSlide')) {
            let gen = forwardNumber(index);
            nextSlide = gen.next().value;
            if(nextSlide >= slides.length) return false;
            Dots.forEach(dot => {
                dot.classList.remove('activeDot');
            });
            Dots[nextSlide].classList.add('activeDot');
            slide.classList.remove('activeSlide');
            slide.classList.add('inLeft');
            slides[nextSlide].classList.remove('inRight');
        };
    });
    slides[nextSlide].classList.add('activeSlide');
});


leftArrow.addEventListener('click', () => {
    let prevSlide;
    slides.forEach((slide, index) => {
        if(slide.classList.contains('activeSlide')) {
            let gen = backwardNumber(index);
            prevSlide = gen.next().value;
            if(prevSlide < 0) return false;
            Dots.forEach(dot => {
                dot.classList.remove('activeDot');
            });
            Dots[prevSlide].classList.add('activeDot');
            slide.classList.remove('activeSlide');
            slide.classList.add('inRight');
            slides[prevSlide].classList.remove('inLeft');
        };
    });
    slides[prevSlide].classList.add('activeSlide');
});

// Click Photo To show details.
let photoDivs = document.querySelectorAll('.pics .photo');

photoDivs.forEach(box => {
    box.addEventListener('click', () => {  
        let overlayDiv = document.createElement('div');
        overlayDiv.classList.add('overlay-js');

        let clickedImg = box.querySelector('img');
        let overlayImg = document.createElement('img');
        overlayImg.setAttribute('src', clickedImg.src);

        let closebtn = document.createElement('button');
        closebtn.textContent = 'X';
        closebtn.classList.add('close-btn');

        closebtn.onclick = () => {
            overlayDiv.style.display = 'none';
        }
        
        overlayDiv.appendChild(overlayImg);
        overlayDiv.appendChild(closebtn);
        document.body.appendChild(overlayDiv);
    });
});