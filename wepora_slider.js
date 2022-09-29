let getALLslid = document.querySelectorAll('.wepora-slider');
for (let allImg of getALLslid) {

    let getid = document.querySelector('.wepora-slider').id;
    let slides = document.getElementById(allImg.id).getElementsByClassName("Slide");

    //dot create
    for (let i = 1; i <= slides.length; i++) {
        const para = document.createElement("span");
        para.classList.add("Navdot");
        para.onclick = function () {
            showSlides((slideIndex = i));
        }
        dotId = document.getElementById(allImg.id).getElementsByClassName('wepora-slider-dot');
        for (let item of dotId) {
            item.appendChild(para);
        }
    }

    //auto slide  

    var speedSec = document.getElementById(allImg.id).getAttribute('wep-slider-speed');
    function autoslide(speed = speedSec) {
        for (let i = 1; i <= slides.length; i++) {
            setTimeout(function () {
                showSlides(slideIndex = i);
            }, speed * i);
        }
    }
    setInterval(autoslide, speedSec * (slides.length));



    //slide btn
    document.querySelector(".prev").addEventListener("click", () => {
        changeSlides(-1);
    });
    document.querySelector(".next").addEventListener("click", () => {
        changeSlides(1);
    });
    var slideIndex = 1;
    showSlides(slideIndex);
    function changeSlides(n) {
        showSlides((slideIndex += n));
    }

    function currentSlide(n) {
        showSlides((slideIndex = n));
    }

    function showSlides(n) {
        var i;
        var dots = document.getElementsByClassName("Navdot");
        if (n > slides.length) {
            slideIndex = 1;


        }
        if (n < 1) {
            slideIndex = slides.length;

        }
        Array.from(slides).forEach(item => (item.style.display = "none"));
        Array.from(dots).forEach(
            item => (item.className = item.className.replace(" selected", ""))
        );
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " selected";

    }
}