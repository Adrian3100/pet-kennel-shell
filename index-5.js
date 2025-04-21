// Utility for generating random integers
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Pet Constructor
class Pet {
  constructor(name) {
    this.name = name;
    this.happiness = 50;
    this.energy = getRandomInt(0, 50); // BONUS: Start with random energy
  }

  play() {
    this.happiness += 10;
    this.energy -= 15;
    return `You played with ${this.name}! Happiness is now ${this.happiness}, Energy is now ${this.energy}.`;
  }

  feed() {
    this.energy += 20;
    return `You fed ${this.name}. Energy is now ${this.energy}.`;
  }

  status() {
    return `${this.name} - Happiness: ${this.happiness}, Energy: ${this.energy}`;
  }
}

// Create kennels with pets
const dogs = [new Pet("Buddy"), new Pet("Max")];
const cats = [new Pet("Whiskers"), new Pet("Mittens")];
const fish = [new Pet("Bubbles"), new Pet("Goldie")];

const kennels = [dogs, cats, fish];

// Play with pets - different numbers of times
console.log("=== Playing with Pets ===");
console.log(dogs[0].play());
console.log(dogs[0].play());
console.log(dogs[0].play());

console.log(dogs[1].play());

console.log(cats[0].play());
console.log(cats[0].play());

console.log(fish[1].play());

console.log("\n=== Status After Playing ===");
kennels.flat().forEach((pet) => {
  console.log(pet.status());
});

// Feed pets conditionally if energy < 30
console.log("\n=== Feeding Pets with Low Energy ===");
kennels.forEach((kennel) => {
  kennel.forEach((pet) => {
    if (pet.energy < 30) {
      console.log(pet.feed());
    }
  });
});

// Final Status
console.log("\n=== Final Status of All Pets ===");
kennels.flat().forEach((pet) => {
  console.log(pet.status());
});
