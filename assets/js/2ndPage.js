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

  // console.log('lat');

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
          return;
      }
  }
}  
getCity();

searchBtn.click(function() {
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
  var locationId = array.locationId;

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