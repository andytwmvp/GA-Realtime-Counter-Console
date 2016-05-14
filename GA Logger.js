// ==UserScript==
// @name      GA Logger
// @namespace andytwmvp
// @include   https://analytics.google.com/analytics/web/*
// @version   0.1
// @grant     none
// ==/UserScript==
var max_people = 0;
var people_string = '';
var time_start = new Date();
// var time_difference = 0;

function log() {
    var log_value = document.getElementById('ID-overviewCounterValue').innerHTML;
    var currentdate = new Date();
    
//  console.log(time_difference);
    if( log_value > max_people ) {
//  if( log_value > max_people && log_value > 1500 ) {
        max_people = log_value;
        people_string = ((currentdate.getMonth()+1)<10?'0':'')
                        + (currentdate.getMonth()+1) + '/'
                        + (currentdate.getDate()<10?'0':'')
                        + currentdate.getDate() + ' '
                        + (currentdate.getHours()<10?'0':'')
                        + currentdate.getHours() + ':'
                        + (currentdate.getMinutes()<10?'0':'')
                        + currentdate.getMinutes() + ':'
                        + (currentdate.getSeconds()<10?'0':'')
                        + currentdate.getSeconds() + '.'
                        + (currentdate.getMilliseconds()<100?'0':'')
                        + (currentdate.getMilliseconds()<10?'0':'')
                        + currentdate.getMilliseconds()
                        + ' Max Number      ¡G '
                        + max_people;
        console.log(people_string);
    }
    var now_string = ((currentdate.getMonth()+1)<10?'0':'')
                     + (currentdate.getMonth()+1) + '/'
                     + (currentdate.getDate()<10?'0':'')
                     + currentdate.getDate() + ' '
                     + (currentdate.getHours()<10?'0':'')
                     + currentdate.getHours() + ':'
                     + (currentdate.getMinutes()<10?'0':'')
                     + currentdate.getMinutes() + ':'
                     + (currentdate.getSeconds()<10?'0':'')
                     + currentdate.getSeconds() + '.'
                     + (currentdate.getMilliseconds()<100?'0':'')
                     + (currentdate.getMilliseconds()<10?'0':'')
                     + currentdate.getMilliseconds()
                     + ' Real Time Number¡G '
                     + log_value;
    
    console.log(now_string);
//  if ( log_value > 1500 ) {
//     console.log(now_string);
//  }
//  time_difference = (currentdate - time_start) % 600000;

}

// Test for getMilliseconds leading zero
// while( time_start.getMilliseconds() > 100 ) {
//     console.log(time_start.getMilliseconds());
//     setTimeout('',Math.floor((Math.random() * 1000) + 1));
//     time_start = new Date();
// }

setInterval(log, 5000);