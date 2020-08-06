document.getElementById('storylabel').innerHTML = 'Premier circuit: écriture à intervalles.';

document.getElementById('story').value = '';
var txt = '';
var timerrr = 11;

var rd_only = false;

function chrono() {

    timerrr -= 1;
    document.getElementById('timer').innerHTML = timerrr;
    if (timerrr == 0) {
        rd_only = !rd_only;
        document.getElementById('story').readOnly = rd_only;
        timerrr = 21;
        txt = document.getElementById('story').value;
        document.getElementById('storyfinal').value += txt;
        document.getElementById('story').value = '';
    }
}

chrono();

var intervalID = window.setInterval(chrono, 1000);


