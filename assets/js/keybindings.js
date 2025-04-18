// keybindigs:

// gg -> scroll to top of page
// shift + g -> scroll to bottom of page
// shift + n -> toggle night mode
// j/k -> scroll up/down half page
// / -> focus search bar

let gPressCount = 0;
let lastKeyPressTime = 0;
const doublePressTimeout = 500;

document.addEventListener('keydown', function (event) {
    const key = event.key.toLowerCase();
    if (key === 'g' && !event.shiftKey) {
        const currentTime = new Date().getTime();
        if (currentTime - lastKeyPressTime < doublePressTimeout) {
            gPressCount++;
        } else {
            gPressCount = 1;
        }
        lastKeyPressTime = currentTime;

        if (gPressCount === 2) {
            document.getElementById('documentTop').scrollIntoView({ behavior: 'smooth' });
            gPressCount = 0;
        }
    } else if (event.shiftKey && !event.target.matches('input, textarea, [contenteditable]')) {
        const key = event.key.toLowerCase();
        if (key === 'n') {
            document.getElementById('mode').click();
        } else if (key === 'g') {
            window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
        }
    } else if (event.key.toLowerCase() === 'j' && !event.target.matches('input, textarea, [contenteditable]')) {
        window.scrollBy({ top: -window.innerHeight / 2, behavior: 'smooth' });
    } else if (event.key.toLowerCase() === 'k' && !event.target.matches('input, textarea, [contenteditable]')) {
        window.scrollBy({ top: window.innerHeight / 2, behavior: 'smooth' });
    } else if (event.key === '/' && !event.target.matches('input, textarea, [contenteditable]')) {
        event.preventDefault();
        document.getElementById('find').focus();
    }
});
