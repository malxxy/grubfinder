// JavaScript for first page
// Default for containers
$('.home').show();
$('.content').hide();

// Upon clicking start btn, hide home page and show 2nd page
$("#start-btn").on('click',function() {
    $('.home').hide();
    $('.content').show();
});

// Saving to local storage 


var dropDownPrice = document.getElementById("dropdown");
dropDownPrice.onclick = (e) => {
    let target = e.target || e.srcElement;
    localStorage.setItem("price", target.innerHTML)
}

var dropDownCuisine = document.getElementById("dropdownTwo");
dropDownCuisine.onclick = (e) => {
    let target = e.target || e.srcElement;
    localStorage.setItem("Cuisine", target.innerHTML)
}

var dropDownDiet = document.getElementById("dropdownThree");
dropDownDiet.onclick = (e) => {
    let target = e.target || e.srcElement;
    localStorage.setItem("Diet", target.innerHTML)
}
// Pulling from local storage

