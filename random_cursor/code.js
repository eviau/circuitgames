
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function randomCursor() {

    var input = document.getElementById("cursortext")

    var rnd = getRandomInt(input.value.length);
    
    input.focus();

    input.setSelectionRange(rnd, rnd);
}

var intervalID = window.setInterval(randomCursor, 3000);