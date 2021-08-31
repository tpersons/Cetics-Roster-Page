const time = new
Date().getHours();
let message;
if (time >= 4 , time < 12) {
    message = "Good Morning Celtics Fan"
} else if (time < 20) {
    message = "Good Afternoon Celtics Fan"
} else if (time >= 20 , time < 23) {
    message = "Good Evening Celtics Fan"
} else {
    message = "Good Night Celtics Fan"
}
document.getElementById("greeting").innerText = message