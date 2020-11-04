'use strict'
//timer
var myfunc = setInterval(function(){
    var countDownDate = new Date("Nov 16, 2020, 13:50:00").getTime();

    var now = new Date().getTime();
    var timeleft = countDownDate - now;

    var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
    
    document.getElementById("days").innerHTML = days
    document.getElementById("hours").innerHTML = hours
    document.getElementById("mins").innerHTML = minutes
    document.getElementById("secs").innerHTML = seconds
}, 1000);