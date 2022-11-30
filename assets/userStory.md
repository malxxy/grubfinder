# Title: Find a Restaurant Near Me

## Requirements:

### Must use at least 2 server side APIS
1. Open Maps https://wiki.openstreetmap.org/wiki/API_v0.6
- (zomato through rapid API) must use rapid API token 
- Open Trip Map Places, Zomato, Restaurants API, The Fork The Spoon API
Worldwide Restaurants API, TripAdvisor
https://opentripmap.io/docs
- Restaurants API

### Must use a CSS framework other than Bootstrap
1. Materialize

### Must use client side storage
1. store user preferences of location

### Other requirements
- polished UI
- Must meet good quality coding standards
- NO alerts confirms, or prompts
- Deploy to GitHub Pages
- Must be interactive

## IDEAS
- Suggest restaurants with similar taste
- Filter by radius/Distance
- Filter by diet (Vegetarian, vegan, gluten-free...)
- Filter by type of cuisine (Mexican, Italian, Japanese, etc...)'

## Future API ideas
2. YouTube API? - show videos of restaurants?
3. API for writing a review? (Yelp, TripAdvisor)?
4. API to take you to reservations for the restaurant
5. Facebook Messaging API or What's App API - send the restaurant you found to friends?
 - possible that it's 2 API Google Maps is one API, restaurant call is another API
- Googe APIs: Daily Limit - X amount of sea


## User Story
When I open the app, I want to locate restaurants near a specified location 

## Acceptance criteria
When I open the web page
THEN I am taken to a home screen where I choose my location
WHEN I select my desired location, 
THEN I am prompted to designate criteria on distance from location and filter by additional criteria (*OPTION to filter restaurants by diet or cuisine)
WHEN I select the criteria
THEN restaurants in the area are shown

*m Browser API where you can grab user's location (look for location api on MDN);