var priceChoice = document.querySelectorAll(".priceChoice");
var cuisineChoice = document.querySelectorAll(".cuisineChoice");
var dietChoice = document.querySelectorAll(".dietChoice");
var searchBtn = $("#search-btn");
var userCity = "";
console.log(priceChoice);

// Dropdown call
$('.dropdown-trigger').dropdown();

$("select").formSelect({
  dropdownOptions: {
    container: $("body"),
  },
});

function saveChoice() {
  $(".priceChoice").on("click", function () {
    var priceChoice = this.textContent;
    localStorage.setItem("chosenPrice", priceChoice);
    populatePrice();
  });

  $(".cuisineChoice").on("click", function () {
    var cuisineChoice = this.textContent;
    localStorage.setItem("cuisineChoice", cuisineChoice);
		populateCuisine()
  });

  $(".dietChoice").on("click", function () {
    var dietChoice = this.textContent;
    localStorage.setItem("dietChoice", dietChoice);
		populateDiet()
  });
}

saveChoice();

// Retrieving the saved preference for getItem

function retrieveChoices() {
  var price = localStorage.getItem("chosenPrice");
  var cuisine = localStorage.getItem("cuisineChoice");
  var diet = localStorage.getItem("dietChoice");

  return [price, cuisine, diet];
}

// Preference History Function

function populatePrice() {
  var popPrice = document.getElementById("price-history");
  popPrice.innerHTML = `Price: ${localStorage.getItem("chosenPrice")}`;
}

function populateCuisine(){
	var popCuisine = document.getElementById("cuisine-history");
	popCuisine.innerHTML = `Cuisine: ${localStorage.getItem("cuisineChoice")}`;

}

function populateDiet() {
	var popDiet = document.getElementById("diet-history");
	popDiet.innerHTML = `Diet: ${localStorage.getItem("dietChoice")}`;
}

function retrieveChoices(){
    var price = localStorage.getItem("chosenPrice");
    var cuisine = localStorage.getItem("cuisineChoice");
    var diet = localStorage.getItem("dietChoice");
    
    return [price, cuisine, diet];
}

// Leaflet Map api
// var map = L.map("map").setView([51.505, -0.09], 13);
// L.tileLayer(
//   "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpandmbXliNDBjZWd2M2x6bDk3c2ZtOTkifQ._QA7i5Mpkd_m30IGElHziw",
//   {
//     maxZoom: 18,
//     attribution:
//       'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
//       '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
//       'Imagery © <a href="http://mapbox.com">Mapbox</a>',
//     id: "mapbox.streets",
//   }
// )
// .addTo(mymap);




// Find city name using lat and lon
function getCity(one, two) {
  var xhr = new XMLHttpRequest();
  var lat = coordinates[0];
  var lng = coordinates[1];
  var lat = userLatitude;
  var lng = userLongitude;
  // var lat = 48.855709;
  // var lng = 2.298890;

  console.log('lat',lat);

  // Paste your LocationIQ token below.
  xhr.open('GET', "https://us1.locationiq.com/v1/reverse.php?key=pk.5e9b4412affb8f01f877f95ad3832750&lat=" +
  lat + "&lon=" + lng + "&format=json", true);
  xhr.send();
  xhr.onreadystatechange = processRequest;
  xhr.addEventListener("readystatechange", processRequest, false);

  function processRequest(e) {
      if (xhr.readyState == 4 && xhr.status == 200) {
          var response = JSON.parse(xhr.responseText);
          var city = response.address.city;
          console.log(city);
          localStorage.setItem("userCity",city)
          userCity = localStorage.getItem("userCity",userCity);
          console.log(userCity);
          return;
      }
  }
}  

searchBtn.click(function() {
  var userLatitude = GeolocationPosition.coords.latitude();
  var userLongitude = GeolocationPosition.coords.longitude();
  console.log("userLatitude",userLatitude);
  console.log("userLongitude",userLongitude);
  getCity();
  if (userCity == "") {
    console.log("userError: ","Please allow current location to find restaurants in your location")
  } else {
    const settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://tripadvisor16.p.rapidapi.com/api/v1/restaurant/searchLocation?query="+ userCity,
      "method": "GET",
      "headers": {
        "X-RapidAPI-Key": "9656de4eabmsha3cf15ece0d610dp105cabjsnc0d4301395e5",
        "X-RapidAPI-Host": "tripadvisor16.p.rapidapi.com"
      }
    };
    
    $.ajax(settings).done(function (response) {
      console.log(response);
    });
  };
  // var locationId = array.locationId;

  // use location ID to search for restaurants

  // const settings2 = {
  //   "async": true,
  //   "crossDomain": true,
  //   "url": "https://tripadvisor16.p.rapidapi.com/api/v1/restaurant/searchRestaurants?locationId=" + locationId,
  //   "method": "GET",
  //   "headers": {
  //     "X-RapidAPI-Key": "9656de4eabmsha3cf15ece0d610dp105cabjsnc0d4301395e5",
  //     "X-RapidAPI-Host": "tripadvisor16.p.rapidapi.com"
  //   }
  // };
  // $.ajax(settings2).done(function (response) {
  //   console.log(response);
  // });

    // const settings3 = {
  //   "async": true,
  //   "crossDomain": true,
  //   "url": "https://tripadvisor16.p.rapidapi.com/api/v1/restaurant/getRestaurantDetails?restaurantsId=Restaurant_Review-g60750-d2467627-Reviews-Snooze_an_A_M_Eatery-San_Diego_California",
  //   "method": "GET",
  //   "headers": {
  //     "X-RapidAPI-Key": "9656de4eabmsha3cf15ece0d610dp105cabjsnc0d4301395e5",
  //     "X-RapidAPI-Host": "tripadvisor16.p.rapidapi.com"
  //   }
  // };
  
  // $.ajax(settings3).done(function (response) {
  //   console.log(response);
  // });
});

// TripAdvisor Outlines for Restaurant API
var diningAPIkey = "130ba1a5b98741ee8dd6cc355ba285ed";


// google map

// let map, infoWindow;

// function initMap() {
//   map = new google.maps.Map(document.getElementById("map"), {
//     center: { lat: -34.397, lng: 150.644 },
//     zoom: 6,
//   });
//   infoWindow = new google.maps.InfoWindow();

//   const locationButton = document.createElement("button");

//   locationButton.textContent = "Pan to Current Location";
//   locationButton.classList.add("custom-map-control-button");
//   map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
//   locationButton.addEventListener("click", () => {
//     // Try HTML5 geolocation.
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           const pos = {
//             lat: position.coords.latitude,
//             lng: position.coords.longitude,
//           };

//           infoWindow.setPosition(pos);
//           infoWindow.setContent("Location found.");
//           infoWindow.open(map);
//           map.setCenter(pos);
//         },
//         () => {
//           handleLocationError(true, infoWindow, map.getCenter());
//         }
//       );
//     } else {
//       // Browser doesn't support Geolocation
//       handleLocationError(false, infoWindow, map.getCenter());
//     }
//   });
// }

// function handleLocationError(browserHasGeolocation, infoWindow, pos) {
//   infoWindow.setPosition(pos);
//   infoWindow.setContent(
//     browserHasGeolocation
//       ? "Error: The Geolocation service failed."
//       : "Error: Your browser doesn't support geolocation."
//   );
//   infoWindow.open(map);
// }

// window.initMap = initMap;

// // var map = L.map('map').setView([51.5, -0.1], 12);
// // L.tileLayer('https://retina-tiles.p.rapidapi.com/local/osm{r}/v1/{z}/{x}/{y}.png?rapidapi-key=4a848d017cmshb424200fb94e00ep1e9b1ejsnce642e43d80c', {
// // attribution: 'Tiles &copy: <a href="https://www.maptilesapi.com/retina-tiles/">Retina Tiles API</a>, Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
// // maxZoom: 19
// // }).addTo(map);

// // console.log(GeolocationPosition.coords.latitude);

// const settings = {
// 	"async": true,
// 	"crossDomain": true,
// 	"url": "https://mycookbook-io1.p.rapidapi.com/recipes/rapidapi",
// 	"method": "POST",
// 	"headers": {
// 		"content-type": "text/plain",
// 		"X-RapidAPI-Key": "4a848d017cmshb424200fb94e00ep1e9b1ejsnce642e43d80c",
// 		"X-RapidAPI-Host": "mycookbook-io1.p.rapidapi.com"
// 	},
// 	"data": "https://www.jamieoliver.com/recipes/vegetables-recipes/superfood-salad/"
// };

// $.ajax(settings).done(function (response) {
// 	console.log(response);
// });





// Map
var iframe = document.querySelector("iframe");
var userCity;
userCity = "Paris";
// console.log(iframe);
newSRC ="https://www.google.com/maps/embed/v1/place?key=AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg&q=" + userCity;
// var newSRC = string.replace(/value=\".*\"/, "value=\"\"");
// var aboutFlowersNew = aboutFlowers.replace("lovely", "beautiful");
// iframe.add("newSRC");
// iframe.src.add('src', 'newSRC');
$(".map").attr("src",newSRC);

console.log(iframe);