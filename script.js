class Animal {
  constructor(species) {
    this._species = species;
  }

  get species() {
    return this._species;
  }

  makeSound() {
    console.log("The " + this.species + " makes a sound");
  }
}

class Cat extends Animal {
  purr() {
    console.log("purr");
  }
}

class Dog extends Animal {
  bark() {
    console.log("woof");
  }
}

const animal = new Animal("Unknown");
console.log(animal.species); // "Unknown"
animal.makeSound(); // "The Unknown makes a sound"

const cat = new Cat("Cat");
console.log(cat.species); // "Cat"
cat.makeSound(); // "The Cat makes a sound"
cat.purr(); // "purr"

const dog = new Dog("Dog");
console.log(dog.species); // "Dog"
dog.makeSound(); // "The Dog makes a sound"
dog.bark(); // "woof"

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;