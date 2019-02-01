/* JAVASCRIPT is a client side language. So, it has access
to the local time of every user.
*/
//Date();
$("#fullDate").click(function () {
    var d = new Date(); //How we start our new Date.
    $('#fullDate').after("<br><br>" + d + "<br>");
});
//getDay();
var d = new Date();
$("#fullDay").click(function () {
    var day = (d.getDay());
    $('#fullDay').after("<br><br>" + day + "(Monday is 0)<br>");
});
//Using new Array to get the day's name.

var weekDay = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
$("#dayName").click(function () {
    var day = (d.getDay());
    $('#dayName').after("<br><br>" + weekDay[day] + "<br>");
});