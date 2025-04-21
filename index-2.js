// Factory function to create a pet
function createPet(name, species) {
  return {
    name: name,
    species: species,
    happiness: 50,
    energy: 100,

    // Method to play with the pet
    play: function () {
      this.energy -= 20;
      this.happiness += 10;
      return `You played with ${this.name}! Happiness is now ${this.happiness}, and energy is now ${this.energy}.`;
    },

    // Method to feed the pet
    feed: function () {
      this.energy += 20;
      if (this.energy > 100) this.energy = 100;

      this.happiness += 20;
      return `You fed ${this.name}! Happiness is now ${this.happiness}, and energy is now ${this.energy}.`;
    },

    // Method to display pet's current status
    status: function () {
      console.log(
        `Pet Name: ${this.name}, Species: ${this.species}, Happiness: ${this.happiness}, Energy: ${this.energy}`
      );
    },

    // BONUS: Rest method to restore energy
    rest: function () {
      this.energy = 100;
      return `${this.name} has rested. Energy is now fully restored to 100.`;
    },
  };
}

// Create multiple pets
const pet1 = createPet("Fluffy", "Dog");
const pet2 = createPet("Whiskers", "Cat");

// Test pet1
pet1.status(); // Initial status
console.log(pet1.play()); // Play with pet1
console.log(pet1.feed()); // Feed pet1
pet1.status(); // Updated status

// Test pet2
pet2.status(); // Initial status
console.log(pet2.play()); // Play with pet2
console.log(pet2.feed()); // Feed pet2
pet2.status(); // Updated status

// BONUS: Rest one of the pets
console.log(pet1.rest()); // Rest pet1
pet1.status(); // Final status
