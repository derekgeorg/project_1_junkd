// $(document).ready(function(){
// console.log("map.js linked successful");

//Get local time using momentjs and display on header
// var timeNow = (moment().format('MMMM Do YYYY, h:mm:ss a')); 

// console.log(timeNow);
// function clock(){
//     $("#timeClock").text(timeNow)
// }
// setInterval(clock, 1000);

//Moment JS clock shows current time and interval per sec
var timeNow = moment()
$('#timeClock').html(moment(timeNow).format('MMMM Do YYYY, h:mm:ss a'))

function clock() {
    $('#timeClock').html(moment().format('MMMM Do YYYY, h:mm:ss a'))
}

setInterval(clock, 1000)


//Get current coordinates from geolocation
var lat = null;
var lng = null;

navigator.geolocation.getCurrentPosition(function showLocation(position){
    lat = position.coords.latitude;
    lng = position.coords.longitude;
    continueExecution();

function continueExecution(){
// console.log(lat);
// console.log(long);
}




//Creating a call to OpenWeatherAPI
// var APIkey = "3c64ce1214a3d6f650ffb33e2ae6c445";
// var queryURL = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + long + "&units=imperial&appid=" + APIkey;

// $.ajax ({
//     url: queryURL,
//     method: "GET"
// }).then(function(response){
//     console.log(response);
// var temperature = response.main.temp;
// //Display temperature in top header #weatherText
// $("#weatherText").text(temperature + "°")
// });


// $(document).foundation();

//pull temperature based on geographic coordinates provided by location

// var map, infoWindow;
// function initMap() {
//     map = new google.maps.Map(document.getElementById('map-container'), {
//         center: {lat: "", lng: "" ,},
//         zoom: 6

//     });
// infoWindow = new google.maps.InfoWindow;

// if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(function(position){
//         var pos = {
//             lat: position.coords.latitude,
//             lng: position.coords.longitude
//         };

//         infoWindow.setPosition(pos);
//         infoWindow.setContent('Location found.');
//         infoWindow.open(map-container);
//         map.setCenter(pos);
//     }, function() {
//         handleLocationError(true, infoWindow, map-container.getCenter());
//     });
//     } else {
//         handleLocationError(false, infoWindow, map-container.getCenter());
//     }
// }
// function handleLocationError(browserHasGeolocation, infoWindow, pos){
//     infoWindow.setPosition(pos);
//     infoWindow.setContent(browserHasGeolocation ?
//         'Error: The Geolocation service failed.' :
//         'Error: Your browser doesn\'t support geolocation.');
//     infoWindow.open(map-container);
// }

});
// });
