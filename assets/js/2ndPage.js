var priceChoice = document.querySelectorAll(".priceChoice");
var cuisineChoice = document.querySelectorAll(".cuisineChoice");
var dietChoice = document.querySelectorAll(".dietChoice");
console.log(priceChoice);

document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".dropdown-trigger");
  M.Dropdown.init(elems, options);
});

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
var map = L.map("map").setView([51.505, -0.09], 13);
L.tileLayer(
  "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpandmbXliNDBjZWd2M2x6bDk3c2ZtOTkifQ._QA7i5Mpkd_m30IGElHziw",
  {
    maxZoom: 18,
    attribution:
      'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
      '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
      'Imagery © <a href="http://mapbox.com">Mapbox</a>',
    id: "mapbox.streets",
  }
).addTo(mymap);

// RESTAURANT API
var diningAPIkey = "130ba1a5b98741ee8dd6cc355ba285ed";
var searchBtn = $("#search-btn");
var userLocation = 

// function diningParameters (price,cuisine,diet) {
//   if (price == undefined && cuisine == undefined && diet == undefined) {
//     GET https:s//api.spoonacular.com/food/restaurants/search

function pullAPI() {
  const settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://tripadvisor16.p.rapidapi.com/api/v1/restaurant/searchLocation?query="+ userLocation,
    "method": "GET",
    "headers": {
      "X-RapidAPI-Key": "9656de4eabmsha3cf15ece0d610dp105cabjsnc0d4301395e5",
      "X-RapidAPI-Host": "tripadvisor16.p.rapidapi.com"
    }
  };
  
  $.ajax(settings).done(function (response) {
    console.log(response);
  });

  const settings2 = {
    "async": true,
    "crossDomain": true,
    "url": "https://tripadvisor16.p.rapidapi.com/api/v1/restaurant/searchRestaurants?locationId=" + locationId,
    "method": "GET",
    "headers": {
      "X-RapidAPI-Key": "9656de4eabmsha3cf15ece0d610dp105cabjsnc0d4301395e5",
      "X-RapidAPI-Host": "tripadvisor16.p.rapidapi.com"
    }
  };
  
  $.ajax(settings2).done(function (response) {
    console.log(response);
  });

  const settings3 = {
    "async": true,
    "crossDomain": true,
    "url": "https://tripadvisor16.p.rapidapi.com/api/v1/restaurant/getRestaurantDetails?restaurantsId=Restaurant_Review-g60750-d2467627-Reviews-Snooze_an_A_M_Eatery-San_Diego_California",
    "method": "GET",
    "headers": {
      "X-RapidAPI-Key": "9656de4eabmsha3cf15ece0d610dp105cabjsnc0d4301395e5",
      "X-RapidAPI-Host": "tripadvisor16.p.rapidapi.com"
    }
  };
  
  $.ajax(settings3).done(function (response) {
    console.log(response);
  });
};

searchBtn.addEventListener('click', pullAPI);