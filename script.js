let quoteBtn = document.getElementById("quote-btn");
let displayQuote = document.getElementById("quote-container");


// Array of quotes
const quotes = [
  "Success is not final, failure is not fatal: it is the courage to continue that counts. - Winston Churchill",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "Happiness is not something ready made. It comes from your own actions. - Dalai Lama",
  "Try to be a rainbow in someone's cloud. - Maya Angelou",
  "I have not failed. I've just found 10,000 ways that won't work. - Thomas A. Edison"
];

quoteBtn.addEventListener("click", generateQuote);

// Function to generate and display a random quote
function generateQuote() {
  // Get a random index from the quotes array
  const randomNumber = Math.floor(Math.random() * quotes.length); 
  // Get the quote at the random index
  const quote = quotes[randomNumber];
  // Display the quote in the quote container
  displayQuote.innerText = quote;
}

// generate quotes every 15s
setInterval(() => {
    generateQuote();
}, 15000);