const refs = {};

const timerData = {
    selector: "#timer-1",
    targetDate: new Date("Jul 17, 2020"),
};
const timer = {
    start() {
        const startTime = Date(timerData.targetDate);
        setInterval(() => {
            const currentTime = Date.now();
            const delTime = startTime - currentTime;
            //console.log(delTime);
        }, 1000);
    },
};
timer.start();
function updateTimer(time) {
    const days = pad(Math.floor(time % (1000 * 60 * 60 * 24)));
    const hours = pad(
        Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
    console.log(`${hours}:${mins}:${secs}`);
}
function pad(value) {
    return String(value).padStart(2, "0");
}
