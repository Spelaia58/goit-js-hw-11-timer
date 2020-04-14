const refs = {
    days: document.querySelector("span[data-value='days'"),
    hours: document.querySelector("span[data-value = 'hours']"),
    mins: document.querySelector("span[data-value = 'mins']"),
    secs: document.querySelector("span[data-value = 'secs']"),
    timer: document.querySelector("#timer-1"),
};

const timerData = {
    selector: "#timer-1",
    targetDate: new Date("2020, 6,17"),
};
const timer = {
    start() {
        const startTime = timerData.targetDate;
        setInterval(() => {
            const currentTime = Date.now();
            const delTime = startTime - currentTime;

            updateTimer(delTime);
        }, 1000);
    },
};
timer.start();
function updateTimer(time) {
    const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = pad(
        Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
    refs.days.textContent = `${days}`;
    refs.hours.textContent = `${hours}`;
    refs.mins.textContent = `${mins}`;
    refs.secs.textContent = `${secs}`;
}
function pad(value) {
    return String(value).padStart(2, "0");
}
