var priceChoice = document.querySelectorAll(".priceChoice");
var cuisineChoice = document.querySelectorAll(".cuisineChoice");
var dietChoice = document.querySelectorAll(".dietChoice");
var searchBtn = $("#search-btn");
var userCity = "";
var lat = NaN;
var lng = NaN;
console.log(priceChoice);

// Dropdown call
$('.dropdown-trigger').dropdown();
$('.filter').hide();
$('.search').hide();
$('.restaurant-list').hide();

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


// Location and Map

$("#location-button").on("click", function() {

  const successCallback = (position) => {
    console.log(position);
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);
    lat = position.coords.latitude;
    lng = position.coords.longitude;
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
          userCity = localStorage.getItem("userCity",userCity);
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
  
    // console.log(iframe);
    newSRC ="https://www.google.com/maps/embed/v1/place?key=AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg&q=" + location
    $(".map").attr("src",newSRC);
    
    console.log(iframe);

    $(".filter").show();
    $(".search").show();
};

// call secret key
var key = config.rapid_API_key;

// grab user location and pull restaurants (TRAVEL ADVISOR API)
searchBtn.on("click", function () {
  const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': key,
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
    }
};

stringLat = lat.toString();
stringLng = lng.toString();
console.log("StringLat",stringLat);
console.log("StringLng",stringLng);

fetch('https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng?latitude=' + stringLat + '&longitude=' + stringLng + 'limit=30&currency=USD&distance=2&open_now=false&lunit=km&lang=en_US', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

$(".restaurant-list").show();

// JSON to array 
var restaurantArray = response.json();
var parsed = JSON.parse(response);
console.log(parsed);

// append restaurants to div
for (let index = 0; index < restaurantArray.length; index++) {
  var list = document.createElement(ul);
  list.textContent = restaurantArray.name[index];
  document.body.appendChild(li);
  }

//displayRstrntsMap();
});

// function displayRstrntsMap() {
  // var locationArray = data.array.latitude.and.longitude.of.every.restaurant
  // for (let index = 0; index < array.length; index++) {
  //    const element = array[index];
  //  }
//};