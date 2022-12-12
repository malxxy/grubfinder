var priceChoice = document.querySelectorAll(".priceChoice");
var cuisineChoice = document.querySelectorAll(".cuisineChoice");
var dietChoice = document.querySelectorAll(".dietChoice");
var searchBtn = $("#search-btn");
var userCity = "";
console.log(priceChoice);

// document.addEventListener("DOMContentLoaded", function () {
//   var elems = document.querySelectorAll(".dropdown-trigger");
//   M.Dropdown.init(elems, options);
// });

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

// Spoonacular API
var restaurantsAPI = "130ba1a5b98741ee8dd6cc355ba285ed";
// API calls
// City API call (var = geoLocation)
// Price API call (var = popPriceChoice)
// Cuisine API call (var = popCuisineChoice)
// Diet API call (var = popDietChoice)

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



// TripAdvisor Outlines for Restaurant API
var diningAPIkey = "130ba1a5b98741ee8dd6cc355ba285ed";



// Location and Map

$("#location-button").on("click", function() {

  const successCallback = (position) => {
    console.log(position);
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);
    var lat = position.coords.latitude;
    var lng = position.coords.longitude;
    getCity(lat, lng);
  };
  
  const errorCallback = (error) => {
    console.log(error);
  };
  
  navigator.geolocation.getCurrentPosition(successCallback, errorCallback);


});


function getCity(latitude, longitude) {
  var xhr = new XMLHttpRequest();
  var lat = latitude;
  var lng = longitude;
  // var lat = userLatitude;
  // var lng = userLongitude;
  // var lat = 48.855709;
  // var lng = 2.298890;

  console.log(lat,lng);

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
          var userCity = localStorage.getItem("userCity",userCity);
          console.log(userCity);
          displayMap(userCity)
          return;
      }
  }
};


var addressInput = document.getElementById("address");
var cityInput = document.getElementById("city");



$("#address-button").on("click", function() {

  address = addressInput.value;
  completeAddress = address;
  displayMap(completeAddress);

  // console.log(completeAddress);

});

function displayMap(location){
  var iframe = document.querySelector("iframe");
    // var userCity;
    // userCity = "Paris";

    // console.log(position.coords.latitude);
    // console.log(position.coords.longitude);

  
    // console.log(iframe);
    newSRC ="https://www.google.com/maps/embed/v1/place?key=AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg&q=" + location
    // var newSRC = string.replace(/value=\".*\"/, "value=\"\"");
    // var aboutFlowersNew = aboutFlowers.replace("lovely", "beautiful");
    // iframe.add("newSRC");
    // iframe.src.add('src', 'newSRC');
    $(".map").attr("src",newSRC);
    
    console.log(iframe);
};

