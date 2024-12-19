let menu = document.querySelector("header nav");
let menuToggle = document.querySelector(".menu-toggle");

menuToggle.addEventListener("click", function(e) {
    e.preventDefault();
    menu.classList.toggle("show-menu");
    menuToggle.classList.toggle("active");
});

window.addEventListener("resize", function() {
    if (window.innerWidth > 375 && window.innerWidth < 720 && menu.classList.contains("show-menu")) {
        menu.classList.remove("show-menu");
        menuToggle.classList.remove("active");
    }
});

let slideNow = 1;
let slideCount = $('#slidewrapper').children().length;
let translateWidth = 0;
let slideInterval = 1000;

function prevSlide() {
    if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
        translateWidth = -$('#viewport').width() * (slideCount - 1);
        $('#slidewrapper').css ({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow = slideCount;
    }
    else {
        translateWidth = -$('#viewport').width() * (slideNow - 2);
        $('#slidewrapper').css ({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow--;
    }
}
function nextSlide() {
    if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
        $('#slidewrapper').css('transform', 'translate(0, 0)');
        slideNow = 1;
    }
    else {
        translateWidth = -$('#viewport').width() * (slideNow);
        $('#slidewrapper').css ({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow++;
    }
}
$('#next-btn').on('click touchstart', function(e) {
    e.preventDefault(); // Предотвращаем стандартное поведение
    nextSlide();
});

$('#prev-btn').on('click touchstart', function(e) {
    e.preventDefault(); // Предотвращаем стандартное поведение
    prevSlide();
});

let navBtnId = 0;

$('.slide-nav-btn').click(function() {
    navBtnId = $(this).index();

    if (navBtnId + 1 != slideNow) {
        translateWidth = -$('#viewport').width() * (navBtnId);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow = navBtnId + 1;
    }
});