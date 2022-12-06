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

// Restaurants API

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
		'X-RapidAPI-Host': 'restaurants-api.p.rapidapi.com'
	}
};

fetch('https://restaurants-api.p.rapidapi.com/restaurants?latitude=%3CREQUIRED%3E&longitude=%3CREQUIRED%3E&radius=%3CREQUIRED%3E', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));


