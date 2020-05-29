var header = document.querySelector(".header");
var programs = document.querySelector(".programs");

window.addEventListener("scroll", function () {
    if (window.scrollY >= programs.offsetTop - header.offsetHeight) {
        header.style.top = "0px";
        header.style.opacity = 1;
    } else {
        header.style.top = "-67px";
        header.style.opacity = 0;
    }
});


