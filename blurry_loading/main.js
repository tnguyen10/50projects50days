const LOADING_TEXT_SELECTOR = '.loading-text'
let loadingInt = 0

const BLURRED_OVERLAY_SELECTOR = '.blurred-overlay'
let blurredInt = 30

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}

window.onload = function loading() {
    const blurredOverlay = document.querySelector(BLURRED_OVERLAY_SELECTOR)
    blurredOverlay.style.backdropFilter = `blur(${blurredInt}px)`

    const interval = setInterval(function () {
        loadingInt += 1;
        const loadingText = document.querySelector(LOADING_TEXT_SELECTOR);
        loadingText.textContent = `${loadingInt}%`
        loadingText.style.opacity = scale(loadingInt, 0, 100, 1, 0);

        blurredInt = scale(loadingInt, 0, 100, 30, 0);
        blurredOverlay.style.backdropFilter = `blur(${blurredInt}px)`

        if (loadingInt === 100) {
            document.querySelector(LOADING_TEXT_SELECTOR).remove()
            clearInterval(interval);
        }
    }, 100);
}

// SUMMARY
// - learnt about setInterval function, backdropFilter, and scaling ranges of number
// - if just use filter: blur then there's white border around, og hides it by increasing the vw and vh