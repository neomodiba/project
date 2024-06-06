function getCurrentDateTime() {
    let currentDate = new Date();
   
    let dateString = currentDate.toLocaleDateString();
    let timeString = currentDate.toLocaleTimeString();

    return {date: dateString, time: timeString};
}

function displayDateTime() {
     
    let dateTime = getCurrentDateTime();
    let dateElement = document.getElementById('dateElement');
    let timeElement = document.getElementById('timeElement');

    dateElement.textContent = "Date: " + dateTime.date;
    timeElement.textContent = "Time: " + dateTime.time;
}
displayDateTime();