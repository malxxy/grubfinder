
# GRUBFINDER
Group 3 Project 01 UCBFSF

## Description

With Grubfinder, employees can quickly search for restaurants in the area, filter results by cuisine type, diet, price, and ratings, and view information about each restaurant, including its location, menu, and hours of operation. They can also read reviews from other users and see photos of the restaurant and its dishes. This will save us time and hassle, and help our employees find great restaurants for lunch that they will enjoy.
### User Story
```
AS a busy professional,
I WANT to be able to quickly and easily find a good restauraunt for lunch near my office
SO THAT I can find the perfect place to eat.
I WANT to be able to filter my results by cuisine type, price, and ratings
SO THAT I can find restaurants that meet my preference.
```
### Acceptance Criteria
```
GIVEN that I am a busy proffessional looking for lunch near my office
WHEN I go to the GRUBFINDER website and enter my location
THEN I am presented with a list of restaurants near my office.
WHEN I click on a specific restaurant from the list
THEN I am presented with detailed information about the restaurant, including its location,menu, and hours of operation
WHEN I filter the results by cuisine type/diet, price, and ratings
THEN I should be presented with a list of restaraunts that match my preferences
WHEN I resize the page or view the site on various screens and devices
THEN I am presented with a responsive layout that adapts to my viewport
```

## Table of Contents
1. [Installation](##installation)
2. [Usage](##usage)
3. [Code](##code snippets)
4. [License](##license)
5. [Features](##features)
6. [Contributing](##contributing)

## Installation
No Install Needed. You can access the webpage through the link below.

https://malxxy.github.io/project-01

## Usage
To use GRUBFINDER, simply visit the website and enter your location. You will be presented with a list of restaurants near your current location. You can use the filters on the second page to narrow down your search based on cuisine type, price, and ratings. You can also click on a specific restaurants to view more detailed information, including its location, menu, hours of operation.
#### Homepage

Navigate through the webpage directly from the homepage. You can go directly to the resturaunt search by clicking on the 'FIND A RESTAURANT' button. You can also use the NavBar to checkout our about section. Alternitavely if there are any issues with the website you can check out the help page and ask for assistance from a GRUBFINDER team member.

![Picture of Homepage](./assets/images/home.png)

#### Search

We've made it easy to view restaurants in your area. Using geolocation data collected from your system we can display a list of restaraunts in your area. Alternitavely you can search from an address, city , or state. Its up to you to search where you want!

![Picture of Services Tab](./assets/images/search.png)

### Resturaunts Near YOU!
After selecting your preferences the application will display a list of restaraunts in your area that match your search criteria.

![Picture of lIST OF RS](./assets/images/restaurauntsnearyou.png)

### Contact Form

We've implemented a contact form for any questions or assistance you may need using the webpage. Simply navigate from the homepage to the HELP page using the navbar. From there fill out the form and submit it.

![Picture of Contact Form](./assets/images/contactform.png)


## Code Snippets


### Geolocation

Geolocation is a useful feature to add to a restaurant finder app because it allows users to search for restaurants near their current location. This is especially helpful for people who are in a new area or city and don't know where to find good restaurants. Additionally, adding geolocation to the app can also improve the accuracy of the search results and make it easier for users to find exactly what they are looking for. By using the user's current location, the app can provide more relevant and targeted search results.

```js
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
```

### Local Storage

Saving data to local storage is useful because it allows an app to store data on the user's device in a way that is easily accessible and persistent. 
This is especially useful for websites that need to store user preferences. We implemented this to store user search preferences.

First we collect the data
```js
function saveChoice() {
  $(".priceChoice").on("click", function () {
    var priceChoice = this.textContent;
    localStorage.setItem("chosenPrice", priceChoice);
    populatePrice();
  });

  saveChoice();
```
Then we retrieve the stored data

```js
function retrieveChoices() {
  var price = localStorage.getItem("chosenPrice");
  var cuisine = localStorage.getItem("cuisineChoice");
  var diet = localStorage.getItem("dietChoice");

  return [price, cuisine, diet];
}
```
### Contact Form

Through the contact form on the main page you can send useful information to the team. We implemented this using Google sheets and the following code.
```js
var sheetName = 'Sheet1'
var scriptProp = PropertiesService.getScriptProperties()

function intialSetup () {
  var activeSpreadsheet = SpreadsheetApp.getActiveSpreadsheet()
  scriptProp.setProperty('key', activeSpreadsheet.getId())
}

function doPost (e) {
  var lock = LockService.getScriptLock()
  lock.tryLock(10000)

  try {
    var doc = SpreadsheetApp.openById(scriptProp.getProperty('key'))
    var sheet = doc.getSheetByName(sheetName)

    var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0]
    var nextRow = sheet.getLastRow() + 1

    var newRow = headers.map(function(header) {
      return header === 'timestamp' ? new Date() : e.parameter[header]
    })

    sheet.getRange(nextRow, 1, 1, newRow.length).setValues([newRow])

    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'success', 'row': nextRow }))
      .setMimeType(ContentService.MimeType.JSON)
  }

  catch (e) {
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'error', 'error': e }))
      .setMimeType(ContentService.MimeType.JSON)
  }

  finally {
    lock.releaseLock()
  }
}
```

## License

MIT License

Copyright (c) [2022] [Jorge Zamora]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Features

1. Geolocation
2. Saved preferences through 'localstorage'
3. Implemented Google Maps
4. API's
5. Search
6. Contact Form
7. Materialize

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change. If the issue goes unresolved for more than a week feel free to contact us on the GRUBFINDER website.

