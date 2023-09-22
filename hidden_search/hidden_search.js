const SEARCH_INPUT = '.search-input'
const SEARCH_BUTTON = '.search-button'
const HIDE = 'hide'

function toggleSearch() {
    document.querySelector(SEARCH_INPUT).classList.toggle(HIDE)
    document.querySelector(SEARCH_BUTTON).classList.toggle(HIDE)
    document.querySelector(SEARCH_INPUT).focus()
}


// SUMMARY
// should have use parent search class and children input, button class instead of specific name
// learnt more animation, input reduced in width and button translates horizontally
