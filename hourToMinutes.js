function hourToMin(hour) {
    let minutes = hour * 60;
    return minutes;
}

function hourToSeconds(hour) {
    let seconds = hour * 60 * 60;
    return seconds;
}

let hour = 9;
let hourToMinutes = hourToMin(hour);
let hourToSecond = hourToSeconds(hour);
console.log(hourToMinutes);
console.log(hourToSecond);