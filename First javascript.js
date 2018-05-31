
var listname = [
    "Martin",
    "Jonas",
    "Remi",
    "Kim",
    "Magnus",
    "Sigbjørn",
    "Francis"
];

var picklist = listname[Math.floor(Math.random()*listname.length)];

var listad = [
 "The Robot",
"The Deepfried",
"The Blue",
"The Pristine",
 "The Sober",
 "The Smelly",
 "The Fat",
"The Hairy",
 "The Juicy",
 "The Important",
"The Old"
];

var pickad = listad[Math.floor(Math.random()*listad.length)];

var listanimal = [
    "Chicken",
    "Whale",
    "Dragon",
    "Turtle",
    "Dolphin",
    "Unicorn",
    "Monkey",
    "Pinguin",
    "Cat",
    "Cow",
    "Butterfly",
    "Sousage"
];

var pickanimal = listanimal[Math.floor(Math.random()*listanimal.length)];


var finish = (picklist+ ' ' + pickad + ' ' + pickanimal);

var display = document.createElement("div");
display.textContent = finish;
document.body.appendChild(display)
