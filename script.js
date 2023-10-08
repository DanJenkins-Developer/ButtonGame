let button = document.getElementById("target");
let levelEl = document.getElementById("level");
let clicks = 0;
let level = 1;
let delay = 2000; // 2 seconds

function moveButton() {
    let x = Math.random() * (window.innerWidth - button.clientWidth);
    let y = Math.random() * (window.innerHeight - button.clientHeight);
    button.style.left = x + 'px';
    button.style.top = y + 'px';
    if (clicks < 2) setTimeout(moveButton, delay);
    console.log(clicks)
}

// Reset the game.
function reset() {
    clicks = 0;
    level = 1;
    delay = 2000;
    this.style.backgroundColor = '';

    moveButton()
}

let win = () => {
    setTimeout(() => {
        alert("You won!");
        reset();
    }, 0);
}

button.onclick = function () {

    // Change button to red to indicate click
    this.style.backgroundColor = 'red'

    // increment clicks and level
    clicks++;
    level++;

    // check if the user has won
    if (clicks >= 2) {
        alert("You won!");
        reset()
        //win()
    }

    // Revert the button's color after 300ms
    setTimeout(() => {
        this.style.backgroundColor = '';  // Reverts to original or CSS-defined color.
    }, 300);
    delay *= .99; // 1% speed increase



    // Redraw/move button
    moveButton();

    // Indicate current level on screen
    levelEl.innerHTML = `Level ${level}`
}

moveButton();
