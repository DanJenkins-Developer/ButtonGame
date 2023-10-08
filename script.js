let button = document.getElementById("target");
let level = document.getElementById("level");
let clicks = 0;
let delay = 2000; // 2 seconds

function moveButton() {
    let x = Math.random() * (window.innerWidth - button.clientWidth);
    let y = Math.random() * (window.innerHeight - button.clientHeight);
    button.style.left = x + 'px';
    button.style.top = y + 'px';
    if (clicks < 10) setTimeout(moveButton, delay);
    console.log(clicks)
}

function reset() {
    clicks = 0;
    delay = 2000;
}

button.onclick = function() {

    clicks++;
    if (clicks >= 10) {
        alert("You won!");
        return;
    }
    delay *= .99; // 10% speed increase

    this.style.backgroundColor = 'red';
    
    // Revert the button's color after 300ms
    setTimeout(() => {
        this.style.backgroundColor = '';  // Reverts to original or CSS-defined color.
    }, 300);
    moveButton();

    level.innerHTML = `Level ${clicks + 1}` 
}

moveButton();
