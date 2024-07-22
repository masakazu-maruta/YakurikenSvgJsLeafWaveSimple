const slides = $("#main-bg").find("img");
const slidesLength = slides.length;

const init = () => {
    for (let i = 1; i < slidesLength; i++) {
        slides.eq(i).hide();
    }
}

let now = 0;
const slidesShow = () => {
    slides.eq(now % slidesLength).fadeOut(1500);
    slides.eq((now + 1) % slidesLength).fadeIn(1500);
    now++;
}
init();
setInterval(slidesShow, 6000);