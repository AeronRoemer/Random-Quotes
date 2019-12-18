/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

const quotes = [{
  quote: "This day, anything goes",
  source : "'Halloween' by the Misfits",
  year : "1981"
},{
  quote: "And now you're trapped like a rat on a sinking ship",
  source : "Aus-Rotten",
  album: "...and Now Back to Our Programming"
},{
  quote: "No more donut shops",
  source : "LoC"
},{
  quote: "inhaling toxins with each breath. a caustic buildup in your chest.",
  source : "Insect Warfare",
},{
  quote: "Not open to any suggestions <br> I'm content with what I have",
  source : "Kylesa",
  year : "2005",
  album: "To Walk a Middle Course"
}];

/***
 * `getRandomQuote` function
***/

function getRandomQuote(){
  let rand = Math.floor(Math.random() * 6);
  return quotes[rand];
}

/***
 * `printQuote` function
***/

function printQuote(){
  let quo = getRandomQuote();
  let quoHtml = `<p class="quote"> ${quo.quote} </p> <p class="source"> ${quo.source}`;
  if (quo.album){
    return quoHtml += quoHtml + `<span class="citation"> ${quo.album} </span>`;
  }
  if (quo.year){
    return quoHtml += `<span class="year"> ${quo.year} </span>`;
  }
  quoHtml += "</p>";
  document.getElementById('quote-box').innerHTML = quoHtml
}
console.log(printQuote());

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);