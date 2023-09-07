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
        const currentDate = new Date();
        const options = { hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' };
        const formattedTime = currentDate.toLocaleTimeString(undefined, options);
        timeElement.textContent = formattedTime;
    };

    updateClockDisplay();

    setInterval(updateClockDisplay, 1000);
}

setDayOfWeek();
updateClock();
