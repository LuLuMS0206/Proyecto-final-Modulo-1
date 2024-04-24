//Scroll
window.addEventListener('load', () => {
    const scrollerProgress = document.getElementById('scrollerProgress');
    requestAnimationFrame(scroll);
}
)

function scroll () {
    scrollerProgress.style.width = `${((window.scrollY) / (document.body.scrollHeight - window.innerHeight)*100)}%`;
    requestAnimationFrame(scroll);
}