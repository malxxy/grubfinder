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
  popPrice.innerHTML = localStorage.getItem("chosenPrice");
}

function populateCuisine(){
	var popCuisine = document.getElementById("cuisine-history");
	popCuisine.innerHTML = localStorage.getItem("cuisineChoice")

}

function populateDiet() {
	var popDiet = document.getElementById("diet-history");
	popDiet.innerHTML = localStorage.getItem("dietChoice")
}



// Restaurants API

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "SIGN-UP-FOR-KEY",
    "X-RapidAPI-Host": "restaurants-api.p.rapidapi.com",
  },
};

// ^^^^API Resolution^^^^

fetch(
  "https://restaurants-api.p.rapidapi.com/restaurants?latitude=%3CREQUIRED%3E&longitude=%3CREQUIRED%3E&radius=%3CREQUIRED%3E" +
    new URLSearchParams({ latitude: 37, longitude: 122, radius: 4 }),
  options
)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));

// function getData () {
//     console.log(fetch('https://example-data.draftbit.com/restaurants'));

//     url = 'https://example-data.draftbit.com/restaurants';

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
