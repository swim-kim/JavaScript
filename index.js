let timeContainer = document.querySelector(".time")
    //nowHour = timeContainer.querySelector("#hours"),
    //nowMin = timeContainer.querySelector("#minutes"),
    //nowSec = timeContainer.querySelector("#seconds"),
    nowAmpm = timeContainer.querySelector("#period");

let dayContainer = document.querySelector(".date")
    //nowDay = dayContainer.querySelector("#dayname"),
    //nowMonth = dayContainer.querySelector("#month"),
    //nowDate = dayContainer.querySelector("#daynum"),
    //nowYear = dayContainer.querySelector("#year");

function getTime() {
    let now = new Date();
    const minutes = now.getMinutes();
    let hours = now.getHours();
    const seconds = now.getSeconds();
   
    //html에 text넣기
    //nowHour.innerText = hours;
    //nowMin.innerText = minutes;
    //nowSec.innerText = seconds;

    //nowHour.innerText = hours < 10 ? `0${hours}` : hours;
    //nowMin.innerText = minutes < 10 ? `0${minutes}` : minutes;
    //nowSec.innerText = seconds < 10 ? `0${seconds}` : seconds;
    let ids = ["hours", "minutes", "seconds"]
    if (hours >= 12) {
        nowAmpm.innerText = "PM";
    }
    if (hours == 0) {
        hours = 12;
    }
    if (hours > 12) {
        hours = hours - 12;

    }
    let values = [hours<10?`0${hours}`:hours, minutes<10?`0${minutes}`:minutes, seconds<10?`0${seconds}`:seconds];

    for(let i = 0; i < ids.length; i++){
        document.getElementById(ids[i]).firstChild.nodeValue = values[i];
    }

}    
function getCalender() {
        let now = new Date();
            day = now.getDay(); // 요일
            month = now.getMonth(); // 월
            date = now.getDate(); // 일
            year = now.getFullYear(); // 년
        
        //nowDay.innerText = week[day];
        //nowMonth.innerText = mon[month];
        //nowDate.innerText = date;
        //nowYear.innerText = year; 

        let ids = ["dayname", "month", "daynum", "year"];
        let values = [week[day], mon[month], date, year];
        for(let i = 0; i < ids.length; i++){
            document.getElementById(ids[i]).firstChild.nodeValue = values[i];
        }
}

let week = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

let mon = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

function init() {
    getTime();
    setInterval(getTime, 1000);
    getCalender();

}
init();
