function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function moveNonButton() {
    const button = document.getElementById('nonButton');
    const buttonWidth = button.offsetWidth;
    const buttonHeight = button.offsetHeight;

    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    const maxButtonX = screenWidth - buttonWidth;
    const maxButtonY = screenHeight - buttonHeight;

    const marginTop = 12 * parseFloat(getComputedStyle(document.documentElement).fontSize);

    const maxScreenX = screenWidth - buttonWidth;
    const maxScreenY = screenHeight - buttonHeight - marginTop;

    let newX = getRandomNumber(0, maxScreenX);
    let newY = getRandomNumber(0, maxScreenY);

    newX = Math.min(Math.max(newX, 0), maxButtonX);
    newY = Math.min(Math.max(newY, marginTop), maxButtonY);

    button.style.position = 'fixed';
    button.style.left = newX + 'px';
    button.style.top = newY + 'px';
}

function initialize() {
    document.getElementById('nonButton').addEventListener('mouseenter', moveNonButton);
    window.addEventListener('resize', moveNonButton);
    document.getElementById('nonButton').addEventListener('mouseenter', function() {
        img.src = 'img/cats-sad.gif';
    });
    document.getElementById('ouiButton').addEventListener('mouseenter', function() {
        img.src = 'img/love-cat.gif';
    });
}

const img = document.querySelector('img');
initialize();
