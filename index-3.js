// Factory function to create a pet
function createPet(name, species, energy, happiness) {
  const maxEnergy = energy; // Store max energy specific to each pet

  return {
    name: name,
    species: species,
    energy: energy,
    happiness: happiness,
    maxEnergy: maxEnergy, // Each pet has its own energy cap

    // Displays the current status of the pet
    status: function () {
      console.log(
        `Pet Name: ${this.name}, Species: ${this.species}, Energy: ${this.energy}, Happiness: ${this.happiness}`
      );
    },

    // Feeds the pet (energy and happiness go up)
    feed: function () {
      this.energy += 20;
      if (this.energy > this.maxEnergy) this.energy = this.maxEnergy;

      this.happiness += 10;
      console.log(
        `You fed ${this.name}! Energy: ${this.energy}, Happiness: ${this.happiness}`
      );
    },

    // Plays with the pet (uses energy, increases happiness)
    play: function () {
      if (this.energy >= 20) {
        this.energy -= 20;
        this.happiness += 15;
        console.log(
          `You played with ${this.name}! Energy: ${this.energy}, Happiness: ${this.happiness}`
        );
      } else {
        console.log(`${this.name} is too tired to play.`);
      }
    },

    // BONUS: Rest method to restore energy
    rest: function () {
      this.energy = this.maxEnergy;
      this.happiness -= 5; // Add a mechanic: pets get bored from resting
      if (this.happiness < 0) this.happiness = 0;
      console.log(
        `${this.name} rested. Energy restored to ${this.energy}, but happiness decreased to ${this.happiness}.`
      );
    },
  };
}

// Create 3 unique pets
const pet1 = createPet("Fluffy", "Dog", 100, 70);
const pet2 = createPet("Mittens", "Cat", 90, 60);
const pet3 = createPet("Spike", "Lizard", 80, 50);

// Initialize kennel array
const kennel = [];

// Add pets using push()
kennel.push(pet1);
kennel.push(pet2);
kennel.push(pet3);

// Add 2 more pets using push()
kennel.push(createPet("Nibbles", "Hamster", 70, 65));
kennel.push(createPet("Goldie", "Fish", 60, 75));

// Add 1 more using bracket notation
kennel[5] = createPet("Shadow", "Wolf", 120, 80);

// Log kennel contents using console.table (bonus)
console.table(
  kennel.map((pet) => ({
    Name: pet.name,
    Species: pet.species,
    Energy: pet.energy,
    Happiness: pet.happiness,
  }))
);

// BONUS: Let each pet rest using forEach
kennel.forEach((pet) => {
  pet.rest(); // Energy goes up, happiness slightly goes down
  pet.status(); // Show updated stats after rest
});
