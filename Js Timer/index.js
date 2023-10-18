
document.addEventListener("DOMContentLoaded", function () {
    const timerDisplay = document.getElementById("timer");
    const startButton = document.getElementById("start");
    const pauseButton = document.getElementById("pause");
    const resetButton = document.getElementById("reset");
    let totalSeconds = 300; 
    let countdown;

    startButton.addEventListener("click", startCountdown);
    pauseButton.addEventListener("click", pauseCountdown);
    resetButton.addEventListener("click", resetCountdown);

    function startCountdown() {
        if (totalSeconds > 0) {
            countdown = setInterval(updateTimer, 1000);
            disableButton(startButton);
            enableButton(pauseButton);
        }
    }

    function updateTimer() {
        if (totalSeconds > 0) {
            totalSeconds--;
            const minutes = Math.floor(totalSeconds / 60);
            const seconds = totalSeconds % 60;
            timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        } else {
            clearInterval(countdown);
            enableButton(startButton);
        }
    }

    function pauseCountdown() {
        clearInterval(countdown);
        enableButton(startButton);
    }

    function resetCountdown() {
        clearInterval(countdown);
        totalSeconds = 300;
        timerDisplay.textContent = "05:00";
        enableButton(startButton);
    }

    function disableButton(button) {
        button.disabled = true;
    }

    function enableButton(button) {
        button.disabled = false;
    }
});