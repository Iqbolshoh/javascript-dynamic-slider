let imgs = document.querySelectorAll('.slider img');
let navButtonsContainer = document.getElementById('navButtons');
let prevButton = document.getElementById('prevButton');
let nextButton = document.getElementById('nextButton');
let currentImg = 0;
const interval = 4000; // time for automatic slide transition

function changeSlide(n) {
    // Remove active classes from current image and nav button
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].classList.remove('active', 'previous');
        navButtonsContainer.children[i].classList.remove('active');
    }

    let previousImg = currentImg;
    currentImg = (n + imgs.length) % imgs.length; // Wrap around

    imgs[currentImg].classList.add('active');
    imgs[previousImg].classList.add('previous');
    navButtonsContainer.children[currentImg].classList.add('active');
}

function setupNavButtons() {
    // Create navigation dots
    for (let i = 0; i < imgs.length; i++) {
        let button = document.createElement('span');
        button.classList.add('line');
        button.setAttribute('onclick', 'changeSlide(' + i + ')');
        navButtonsContainer.appendChild(button);
    }

    // Set the initial active state
    navButtonsContainer.children[currentImg].classList.add('active');
}

// Initialize navigation dots
setupNavButtons();

let timer = setInterval(function () {
    changeSlide(currentImg + 1);
}, interval);

prevButton.addEventListener('click', function () {
    changeSlide(currentImg - 1);
    resetTimer();
});

nextButton.addEventListener('click', function () {
    changeSlide(currentImg + 1);
    resetTimer();
});

function resetTimer() {
    clearInterval(timer);
    timer = setInterval(function () {
        changeSlide(currentImg + 1);
    }, interval);
}
