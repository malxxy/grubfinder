var priceChoice = document.querySelectorAll(".priceChoice");
var cuisineChoice = document.querySelectorAll(".cuisineChoice");
var dietChoice = document.querySelectorAll(".dietChoice");


 document.addEventListener("DOMContentLoaded", function () {
   var elems = document.querySelectorAll(".dropdown-trigger");
   var instances = M.Dropdown.init(elems, options);
 });

 $("select").formSelect({
   dropdownOptions: {
     container: $("body"),
   },
 });


function saveChoice(){
    $(".priceChoice").on("click", function() {
        var priceChoice = this.textContent;
        console.log(priceChoice);
        localStorage.setItem("chosenPrice", priceChoice);
    });

    $(".cuisineChoice").on("click", function() {
        var cuisineChoice = this.textContent;
        console.log(cuisineChoice);
        localStorage.setItem("cuisineChoice", cuisineChoice);
    });

    $(".dietChoice").on("click", function() {
        var dietChoice = this.textContent;
        console.log(dietChoice);
        localStorage.setItem("dietChoice", dietChoice);
    });
}

saveChoice();

// Restaurants API

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
		'X-RapidAPI-Host': 'restaurants-api.p.rapidapi.com'
	}
};

<<<<<<< HEAD
fetch('https://restaurants-api.p.rapidapi.com/restaurants?latitude=%3CREQUIRED%3E&longitude=%3CREQUIRED%3E&radius=%3CREQUIRED%3E', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
=======
// Spoonacular API
var restaurantsAPI = "130ba1a5b98741ee8dd6cc355ba285ed";
// API calls
// City API call (var = geoLocation)
// Price API call (var = popPriceChoice)
// Cuisine API call (var = popCuisineChoice)
// Diet API call (var = popDietChoice)
>>>>>>> main

// function getData () {
//     console.log(fetch('https://example-data.draftbit.com/restaurants'));

//     url = 'https://example-data.draftbit.com/restaurants';

fetch('https://restaurants-api.p.rapidapi.com/restaurants?latitude=%3CREQUIRED%3E&longitude=%3CREQUIRED%3E&radius=%3CREQUIRED%3E', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

<<<<<<< HEAD
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
=======
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

// getData();

>>>>>>> main
