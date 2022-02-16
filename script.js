document.getElementById("pin-generate").addEventListener('click', function () {
    document.getElementById("pin-plate").value = Math.floor(Math.random() * 10000 + 1000);
});
document.getElementById("pin-buttons").addEventListener('click', function (event) {
    const pinInput = document.getElementById("pin-input");
    const pinPlate = document.getElementById("pin-plate").value;
    if (event.target.classList.contains("button")) {
        if (event.target.innerText == 'C') { pinInput.value = ''; }
        else if (event.target.innerText == '<') { pinInput.value = pinInput.value.slice(0, -1); }
        else { pinInput.value += event.target.innerText; }
    }
    else if (event.target.type == 'submit' && pinPlate.length) {
        if (pinInput.value == pinPlate) {
            pinInput.value = '';
            notify(true);
        }
        else { notify(false); }
    }
})

function notify(result) {
    document.getElementById("notify-" + result).style.display = "block";
    document.getElementById("notify-" + !result).style.display = "none";
}
