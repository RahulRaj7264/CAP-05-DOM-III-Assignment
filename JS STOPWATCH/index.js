let timerInterval;
        let startTime;
        let pausedTime = 0;
        let isRunning = false;

        const timerElement = document.getElementById("timer");
        const startButton = document.getElementById("start");
        const pauseButton = document.getElementById("pause");
        const resetButton = document.getElementById("reset");

        startButton.addEventListener("click", startTimer);
        pauseButton.addEventListener("click", pauseTimer);
        resetButton.addEventListener("click", resetTimer);

        function startTimer() {
            if (!isRunning) {
                startTime = Date.now() - pausedTime;
                timerInterval = setInterval(updateTimer, 10);
                isRunning = true;
            }
        }

        function pauseTimer() {
            if (isRunning) {
                clearInterval(timerInterval);
                pausedTime = Date.now() - startTime;
                isRunning = false;
            }
        }

        function resetTimer() {
            clearInterval(timerInterval);
            timerElement.textContent = "00:00:00";
            pausedTime = 0;
            isRunning = false;
        }

        function updateTimer() {
            const elapsedTime = Date.now() - startTime + pausedTime;
            const formattedTime = formatTime(elapsedTime);
            timerElement.textContent = formattedTime;
        }

        function formatTime(milliseconds) {
            const totalSeconds = Math.floor(milliseconds / 1000);
            const minutes = Math.floor(totalSeconds / 60);
            const seconds = totalSeconds % 60;
            const centiseconds = Math.floor((milliseconds % 1000) / 10);

            const formattedMinutes = String(minutes).padStart(2, "0");
            const formattedSeconds = String(seconds).padStart(2, "0");
            const formattedCentiseconds = String(centiseconds).padStart(2, "0");

            return `${formattedMinutes}:${formattedSeconds}:${formattedCentiseconds}`;
        }