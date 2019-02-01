/* JAVASCRIPT is a client side language. So, it has access
to the local time of every user.
*/

$("#fullDate").click(function () {
    var d = new Date(); //How we start our new Date.
    $('#fullDate').after("<br><br>" + d + "<br>");
})
var d = new Date();
$("#fullDay").click(function () {
    var day = (d.getDay());
    $('#fullDay').after("<br><br>" + day + "(Monday is 0)<br>");
})