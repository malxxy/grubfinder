
# GRUBFINDER
Group 3 Project UCBFSF

## Description

This is a portfolio I built from scratch meant to showcase skills, projects, and other experience I gain throughout the program. Throughout the README you'll see screenshots of the webpage, code snippets and you'll find a link to the deployed webpage.

### User Story
```
AS AN employer
I WANT to view a potential employee's deployed portfolio of work samples
SO THAT I can review samples of their work and assess whether they're a good candidate for an open position
```
### Acceptance Criteria
```
GIVEN I need to sample a potential employee's previous work
WHEN I load their portfolio
THEN I am presented with the developer's name, a recent photo or avatar, and links to sections about them, their work, and how to contact them
WHEN I click one of the links in the navigation
THEN the UI scrolls to the corresponding section
WHEN I click on the link to the section about their work
THEN the UI scrolls to a section with titled images of the developer's applications
WHEN I am presented with the developer's first application
THEN that application's image should be larger in size than the others
WHEN I click on the images of the applications
THEN I am taken to that deployed application
WHEN I resize the page or view the site on various screens and devices
THEN I am presented with a responsive layout that adapts to my viewport
```

## Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [License](#license)
4. [Badges](#badges)
5. [Features](#features)
6. [Contributing](#contributing)

## Installation
No Install Needed. You can access the webpage through the link below.

https://jbxamora.github.io/deployedapp

## Usage

This will be my main source of content throughout the course. Here are some things I added to my webpage to make it more accessible to readers.
### Accessability
I've added a @media querey to make the webpage accessable to all readers on all devices.
The media screen removes the nav bar and adds a menu bar when the screen is smaller than 600px. This allows the same user experience for both desktop and mobile users.

![Picture of Menu Bar on Mobile Device](./assets/images/mobilemenu.png)
#### NavBar 

A NavBar Implemented into the website so that users are able to quickly jump from section to section.

![Picture of Nav bar](./assets/images/Navbar.png)

#### Working Links

Ive added icons In the 'Portolio' Section of the webpage so you can view different projects and be redirected to the deployed sites. All you need to do is click.

![Picture of Redirect Link](./assets/images/Redirectlinks.png)

#### Comments
For those that are looking to inspect the inside of a webpage, I've added comments so you know where you are in the mass of CSS and HTML.

![HTML Comments](./assets/images/Comments.png)

### User Experience

#### Colors

I've added different colors to capture the attention of readers and a black background for a nice contrast. I beleive this makes the webpage more visually appealing and easier to read.

![Picture of Services Tab](./assets/images/USEREX.png)

### Contact Form

I went down a deep rabbit hole with this project. To showcase that I've implemented a working contact form. The contact form recieves information from the website and then sends it to a google sheet I set up. This wasn't entirely my idea but it bothered me that I built a contact form that did not serve it's purpose.

![Picture of Contact Form](./assets/images/Contactform.png)


This is the most advanced feature on my webpage.

## Code Snippets

### Contact Form

Here is the script I used to connect my contact form to my google sheets. Once I created my Sheet, I went into the appscript extension and inputted this code. Once I deployed the app I was ready to take in contact information from readers.

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

For a more thoughrough explaination here is where I found the script:
https://github.com/jamiewilson/form-to-google-sheets

### Hover

Throughout the webpage the one psuedo class I utelized the most was :hover. You can see it in use on almost all the sections of the site from the navbar to Contact Form. Here is an example of that.

```css
.work {
    border-radius: 10px;
    position: relative;
    overflow: hidden;
}

.work img {
    width: 100%;
    border-radius: 10px;
    display: block;
    transition: transform 0.7s;
}

```

Renders this:

![Picture of Work](./assets/images/Redirectlinks.png)

### Icons

I felt my webpage was a little lacking so I went in search of something that would spice it up. ICONS! Throughout the site you can see icons i've placed. There is a two step process to implementing Icons to your work.

1. Enable the script to allow icons from a third party app/wepsite. For this I used https://fontawesome.com/icons This webpage gives you a peice of code to input into your HTML when you want to insert an icon.

```js
 <script src="https://kit.fontawesome.com/ac5909b33d.js" crossorigin="anonymous" alt="Icons"></script>
```

```html
 <i class="fa-solid fa-rocket"></i>
```

After adding some style to them they render like this:

![Picture of Icons](./assets/images/Screen%20Shot%202022-10-25%20at%2012.04.00%20AM.png)

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

## Badges

<a href=”https://www.linkedin.com/in/jorge-zamora-786945250/”>
<img src='https://img.shields.io/badge/LinkedIn-blue?style=flat&logo=linkedin&labelColor=blue'>

![badmath](https://img.shields.io/github/followers/jbxamora?label=JBXAMORA&logoColor=%23fd2423&style=social)

![badmath](https://img.shields.io/github/license/jbxamora/code-refactor)

## Features

1. HTML
2. CSS
3. GitHub
4. LiveSite
5. Accessability
6. Hover 
7. Comments
8.Contact Form
9.Media Query
10.High Fidelity Wireframe

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change. If the issue goes unresolved for more than a week feel free to contact me at any of the links listed below. Be sure to add me on LinkedIn and Follow me on GitHub to view my course progression. You can also visit the deployed site and sent a messafe through the contact form.

