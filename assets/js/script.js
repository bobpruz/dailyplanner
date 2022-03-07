// get current date
var myDate = moment().format("YYYY-MM-DD");
// extract day from current date
var weekDayName = moment(myDate).format("dddd");
// update current day to html
$("#currentDay").text("Today is: " + weekDayName);

var time = [
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
];

var checkTime = function () {
  var currentTime = moment().format("HH");

  for (i = 0; i < time.length; i++) {
    inputClass = "#input" + time[i];

    if (time[i] > currentTime) {
      $(inputClass).addClass("future");
    } else if (time[i] === currentTime) {
      $(inputClass).addClass("present");
    } else {
      $(inputClass).addClass("past");
    }
  }
};

var timeAudit = function () {
  setInterval(checkTime, 60000);
};

checkTime();
timeAudit();
