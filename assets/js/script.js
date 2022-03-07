// get current date
var myDate = moment().format('YYYY-MM-DD');
// extract day from current date
var weekDayName = moment(myDate).format("dddd");
// update current day to html
$("#currentDay").text("Today is: " + weekDayName);

var time = ["06","07","08", "09", "10", "11", "12", "13", "14", "15", "16", "17","18"];

