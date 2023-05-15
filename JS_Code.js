// List of quotes and authors
const quotes = [
  {
      text: "Plan your steps with purpose, and success will follow in their path.",
  },
  {
      text: "A well-crafted plan is the compass that guides you to your desired destination.",
  },
  {
      text: "In the realm of possibilities, planning is the key that unlocks extraordinary achievements.",
  },
  {
      text: "Embrace the power of planning, for it is the bridge between dreams and reality.",
  },
  {
      text: "With a clear plan as your foundation, you have the strength to build a future of greatness.",
  },
  {
      text: "Let your plans be the sparks that ignite the fire of progress and accomplishment.",
  },
  {
      text: "When you plan with determination and execute with passion, miracles happen.",
  },
  {
      text: "Planning is the art of shaping your dreams into a tangible roadmap for success.",
  },
  {
      text: "The seeds of success are sown in the fertile soil of meticulous planning.",
  },
  {
      text: "Dream big, plan wisely, and watch your aspirations transform into breathtaking realities.",
  },
];

// Function to display a random quote
function displayQuote() {
    const index = Math.floor(Math.random() * quotes.length);
    const quote = quotes[index];
    document.getElementById("quote").innerHTML = `"${quote.text}"`;
}

// Call the displayQuote function when the page loads and every day at midnight
displayQuote();
setInterval(displayQuote, 86400000); // // JavaScript source code
