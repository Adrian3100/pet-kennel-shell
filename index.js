// Create the pet object
const pet = {
  name: "Fluffy", // Pet's name
  species: "Dog", // Pet's species
  happiness: 50, // Initial happiness level

  // Method to play with the pet
  play: function () {
    this.happiness += 10;
    return `You played with ${this.name}! Happiness is now ${this.happiness}.`;
  },

  // Method to feed the pet
  feed: function () {
    this.happiness += 20;
    return `You fed ${this.name}! Happiness is now ${this.happiness}.`;
  },

  // Method to show pet's status
  status: function () {
    console.log(
      `Pet Name: ${this.name}, Species: ${this.species}, Happiness: ${this.happiness}`
    );
  },

  // BONUS: Method to rename the pet
  rename: function (newName) {
    this.name = newName;
    return `Your pet's new name is ${this.name}!`;
  },
};

// Test the object and its methods

// Initial status
pet.status(); // Pet Name: Fluffy, Species: Dog, Happiness: 50

// Play with the pet
console.log(pet.play()); // You played with Fluffy! Happiness is now 60

// Feed the pet
console.log(pet.feed()); // You fed Fluffy! Happiness is now 80

// Updated status
pet.status(); // Pet Name: Fluffy, Species: Dog, Happiness: 80

// BONUS: Rename the pet
console.log(pet.rename("Sparky")); // Your pet's new name is Sparky!

// New status after renaming
pet.status(); // Pet Name: Sparky, Species: Dog, Happiness: 80
