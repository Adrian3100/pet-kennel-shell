// Factory function to create pet objects
function createPet(name, species) {
  // Assign a max energy level based on species
  const energyLevels = {
    Dog: 100,
    Cat: 90,
    Fish: 70,
  };

  const maxEnergy = energyLevels[species] || 80;

  return {
    name: name,
    species: species,
    energy: maxEnergy,
    happiness: Math.floor(Math.random() * 50) + 50, // Random initial happiness between 50-100
    maxEnergy: maxEnergy,

    // Method to feed the pet (adds random happiness)
    feed: function () {
      const gain = Math.floor(Math.random() * 10) + 10; // Random 10–19
      this.happiness += gain;
      if (this.happiness > 100) this.happiness = 100;
      console.log(`Feeding ${this.name}! Happiness is now ${this.happiness}`);
    },

    // Method to show pet status
    status: function () {
      console.log(
        `Pet Name: ${this.name}, Species: ${this.species}, Energy: ${this.energy}, Happiness: ${this.happiness}`
      );
    },

    // BONUS: Make pets lose happiness from boredom
    bored: function () {
      const loss = Math.floor(Math.random() * 10) + 5; // 5–14
      this.happiness -= loss;
      if (this.happiness < 0) this.happiness = 0;
      console.log(`${this.name} got bored. Happiness is now ${this.happiness}`);
    },
  };
}

// Create three separate kennels
const dogKennel = [];
const catKennel = [];
const fishTank = [];

// Populate each kennel with 5 pets
dogKennel.push(
  createPet("Rover", "Dog"),
  createPet("Buddy", "Dog"),
  createPet("Max", "Dog"),
  createPet("Charlie", "Dog"),
  createPet("Cooper", "Dog")
);

catKennel.push(
  createPet("Whiskers", "Cat"),
  createPet("Mittens", "Cat"),
  createPet("Luna", "Cat"),
  createPet("Shadow", "Cat"),
  createPet("Pumpkin", "Cat")
);

fishTank.push(
  createPet("Bubbles", "Fish"),
  createPet("Nemo", "Fish"),
  createPet("Goldie", "Fish"),
  createPet("Splash", "Fish"),
  createPet("Coral", "Fish")
);

// Feed all pets in dogKennel
console.log("\nFeeding all dogs...");
for (let i = 0; i < dogKennel.length; i++) {
  dogKennel[i].feed();
}
console.log("\nDog statuses:");
dogKennel.forEach((dog) => dog.status());

// Feed all pets in catKennel
console.log("\nFeeding all cats...");
for (let i = 0; i < catKennel.length; i++) {
  catKennel[i].feed();
}
console.log("\nCat statuses:");
catKennel.forEach((cat) => cat.status());

// Feed all pets in fishTank
console.log("\nFeeding all fish...");
for (let i = 0; i < fishTank.length; i++) {
  fishTank[i].feed();
}
console.log("\nFish statuses:");
fishTank.forEach((fish) => fish.status());

// BONUS: Make all pets get bored (for fun game mechanic)
console.log("\nOh no! Pets are getting bored...");
[...dogKennel, ...catKennel, ...fishTank].forEach((pet) => {
  pet.bored();
  pet.status();
});
