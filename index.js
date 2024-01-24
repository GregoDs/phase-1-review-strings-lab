// Write your code in this file!
const currentUser = "John Doe"; // You can replace this with the actual name

// Function to generate a welcome message
function welcomeMessage() {
  return "Welcome to Flatbook, " + currentUser + "!";
}

// Function to generate an excited welcome message
function excitedWelcomeMessage() {
  return "WELCOME TO FLATBOOK, " + currentUser.toUpperCase() + "!";
}

// Function to generate a short greeting
function shortGreeting() {
  return "Welcome, " + currentUser.charAt(0) + "!";
}

