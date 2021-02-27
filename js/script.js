/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator

******************************************/

//quotes are placed in an array, and each quotes is an object, with the variables being; quote, source, citation and year
const quotes = [
  {
    quote: "Do or do not, there is no try.",
    source: "Master Yoda",
    profession: "Jedi Master",
    citation: "Star Wars: Episode VI – Return of the Jedi",
    year: 1983,
  },
  {
    quote:
      "It's the questions we can't answer that teach us the most. They teach us how to think. If you give a man an answer, all he gains is a little fact. But give him a question and he'll look for his own answers.",
    source: "Patrick Rothfuss",
    profession: "Author",
    citation: "Wise Man's Fear",
    year: 2011,
  },
  {
    quote: "With great power comes great responsibility.",
    source: "Uncle Ben",
    profession: "Unfortunate By-stander",
    citation: "Spiderman",
    year: 2002,
  },
  {
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    source: "Nelson Mandela",
    profession: "Politician",
    //citation: "",
    //year: "",
  },
  {
    quote: "Only a life lived for others is a life worthwhile.",
    source: "Albert Einstein",
    profession: "Sciencetist",
    //citation: "",
    //year: "",
  },
  {
    quote: "There is some good in this world, and it’s worth fighting for.",
    source: "J.R.R Tolkien",
    profession: "Author",
    citation: "The Two Towers",
    year: 1954,
  },
  {
    quote: "Stay hungry, stay foolish.",
    source: "Steve Jobs",
    profession: "Entrepreneur",
    //citation: "",
    //year: "",
  },
  {
    quote:
      "This above all: To thine own self be true, And it must follow, as the night the day, Thou canst not then be false to any man.",
    source: "William Shakespeare",
    profession: "Author",
    citation: "Hamlet",
    //year: "",
  },
  {
    quote: "Beware; for I am fearless, and therefore powerful.",
    source: "Mary Shelly",
    profession: "Author",
    citation: "Frankenstein",
    //year: "",
  },
  {
    quote: "The future belongs to those who prepare for it today.",
    source: "Malcolm X",
    profession: "Activist",
    //citation: "",
    //year: "",
  },
  {
    quote: "The successful warrior is the average man, with laser-like focus.",
    source: "Bruce Lee",
    profession: "Actor",
    //citation: "",
    //year: "",
  },
  {
    quote: "Anything worth dying for is certainly worth living for.",
    source: "Joseph Heller",
    profession: "Author",
    citation: "Catch-22",
    year: 1961,
  },
];

//This function first generates a random number between 0 and the quotes array length.
//Then it returns the random number as an index of an object from the qoutes array.
function getRandomQuote() {
  a = Math.floor(Math.random() * quotes.length);
  return quotes[a];
}
console.log(getRandomQuote());

//This function makes alteration to the index.html file.
//The message variable is left as an empty string and each tag corresponding to the objects variable is added
function printQuote() {
  let message = ``;
  let result = getRandomQuote(quotes);
  message = `<p class='quote'> ${result.quote} </p>`;
  result.source !== undefined
    ? (message += `<p class='source'> ${result.source}`)
    : false;
  result.citation !== undefined
    ? (message += `<span class='citation'> ${result.citation} </span>`)
    : false;
  result.profession !== undefined
    ? (message += `<span class='profession'> ${result.profession} </span>`)
    : false;
  result.year !== undefined
    ? (message += `<span class='year'> ${result.year} </span> </p>`)
    : false;
  console.log(message);
  //This code generates three random numbers and place in an array
  randomRGB = `rgb( ${Math.floor(Math.random() * 256)}, ${Math.floor(
    Math.random() * 256
  )}, ${Math.floor(Math.random() * 256)} )`;

  //This code allows for the background to change after the page refreshes
  document.body.style.backgroundColor = randomRGB;
  //This code displays the ammended quotes and other variables
  document.getElementById("quote-box").innerHTML = message;
}
console.log(printQuote());

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document
  .getElementById("load-quote")
  .addEventListener("click", printQuote, false);
