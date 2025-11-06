// User types "pizza" (lowercase)
let restaurantName = "Pizza Place";
let searchTerm = "pizza";
 
// Step 1: Convert restaurant name to lowercase
let lowerName = restaurantName.toLowerCase();
 
// Step 2: Check if it includes search term
let found = lowerName.includes(searchTerm);
 
console.log(found);
// Prints: true ✓
