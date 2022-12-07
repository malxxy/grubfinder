var priceChoice = document.querySelectorAll(".priceChoice");
var cuisineChoice = document.querySelectorAll(".cuisineChoice");
var dietChoice = document.querySelectorAll(".dietChoice");


$('.dropdown-trigger').dropdown();



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

// Spoonacular API
var restaurantsAPI = "130ba1a5b98741ee8dd6cc355ba285ed";
// API calls
// City API call (var = geoLocation)
// Price API call (var = popPriceChoice)
// Cuisine API call (var = popCuisineChoice)
// Diet API call (var = popDietChoice)

// Leaflet Map API
var map = L.map("map").setView([51.505, -0.09], 13);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);
