class Dog {
  constructor(name, age = 7, breed) {
    // set up properties on an object
    this.name = name;
    this.age = age;
    this.breed = breed;
  }
  // we write our functions here without any arrow functions
  bark() {
    console.log(this.name + " goes Woof!");
  }
}
const ernie = new Dog("Ernie", 1, "pug");
const vera = new Dog("Vera", 8, "Border Collie");
const scofield = new Dog("Scofeild", 6, "Doberman");
const edel = new Dog("Edel", 7, "German Shorthaired Pointer");

vera.bark();
