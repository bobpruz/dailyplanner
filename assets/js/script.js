// get current date
var myDate = moment().format('YYYY-MM-DD');
// extract day from current date
var weekDayName = moment(myDate).format("dddd");
// update current day to html
$("#currentDay").text("Today is: " + weekDayName);

