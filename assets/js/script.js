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

// set color class by time
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

// refresh colors every minute
var timeAudit = function () {
  setInterval(checkTime, 60000);
};

//save to storage onClick
$(".saveBtn").click(function () {
  storageKey = $(this).parent().attr("id");

  indexKey = storageKey.split("-");

  input = "#input" + indexKey[1];

  localStorage.setItem(storageKey, $(input).val());
});

// read from storage
var getStorage = function () {
  for (i = 0; i < time.length; i++) {
    var storageInput = "#input" + time[i];
    var storageKey = "hour-" + time[i];
    $(storageInput).val(localStorage.getItem(storageKey));
  }
};

checkTime();
timeAudit();
getStorage();
