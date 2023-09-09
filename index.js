const getCurrentDay = document.querySelector(".currentDay");
const getCurrentTime = document.querySelector(".currentTime");

const date = new Date();
let day = date.getDay()
if(day === 0) {
    getCurrentDay.innerHTML = "Sunday";
} else if(day === 1) {
    getCurrentDay.innerHTML = "Monday";
}else if(day === 2) {
    getCurrentDay.innerHTML = "Tuesday";
}else if(day === 3) {
    getCurrentDay.innerHTML = "Wednesday";
}else if(day === 4) {
    getCurrentDay.innerHTML = "Thursday";
}else if(day === 5) {
    getCurrentDay.innerHTML = "Friday";
}else {
    getCurrentDay.innerHTML = "Saturday";
}

const time = new Date();
let currentUTCtime = time.getUTCMilliseconds();
getCurrentTime.innerHTML = currentUTCtime;