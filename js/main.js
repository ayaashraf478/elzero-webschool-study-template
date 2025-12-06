/* Animate Width On Scrolling */
let section = document.querySelector(".our-skills");
let progressSpans = document.querySelectorAll(".the-progress span");

/* Increase Numbers On Scrolling */
let statsSection = document.querySelector(".stats");
let numbers = document.querySelectorAll(".stats .number");
let started = false; // Function Started ? No

window.onscroll = function () {
    // Skills Animate Width
    if(window.scrollY >= section.offsetTop - 250) {
        progressSpans.forEach((span) => {
            span.style.width = span.dataset.width;
        });
    }
    // Increase Numbers On Scrolling 
    if(window.scrollY >= statsSection.offsetTop) {
        if (!started) {
            numbers.forEach((number) => startCount(number));
        }
        started = true;
    }
};
function startCount(el) {
    let goal = el.dataset.goal;
    let count =setInterval(() => {
        el.textContent++;
        if(el.textContent == goal) {
            clearInterval(count);
        }
    }, 2000 / goal);
}