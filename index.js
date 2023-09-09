function setDayOfWeek() {
    const dayOfWeekElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');
    const currentDate = new Date();
    const options = { weekday: 'long' };
    const formattedDayOfWeek = currentDate.toLocaleDateString(undefined, options);
    dayOfWeekElement.textContent = formattedDayOfWeek;
}

function updateClock() {
    const timeElement = document.querySelector('[data-testid="currentUTCTime"]');
    const updateClockDisplay = () => {
        const currentTimeMillis = new Date().getTime(); // Get the current time in milliseconds (Unix time)
        timeElement.textContent = currentTimeMillis.toString();
    };

    updateClockDisplay();

    setInterval(updateClockDisplay, 1);
}

setDayOfWeek();
updateClock();