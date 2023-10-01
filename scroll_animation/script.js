
document.addEventListener("scroll", (event) => {
    document.querySelectorAll('.content').forEach(element => {
        if (
            element.getBoundingClientRect().top >= window.innerHeight / 5 * 4
        ) {
            element.classList.add('hide')
        } else {
            element.classList.remove('hide')
        }
    })
});

