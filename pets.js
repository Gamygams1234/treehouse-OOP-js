class Dog {
  constructor(name, age = 7, breed) {
    // set up properties on an object
    this.name = name;
    this.age = age;
    this.breed = breed;
  }
  // this is our getter method and can be accessed in dot or bracket notation
  get activity() {
    const today = new Date();
    const hour = today.getHours();
    if (hour > 8 && hour <= 20) {
      return "playing";
    } else {
      return "sleeping";
    }
  }
  // this will give us a way to access our setter function
  get owner() {
    return this._owner;
  }
  // this is the way to make the setter function
  set owner(owner) {
    this._owner = owner;
    console.log(`setter called: ${owner}`);
  }
  bark() {
    console.log(this.name + " goes Woof!");
  }
}

class Owner {
  constructor(name, address) {
    // set up properties on an object
    this.name = name;
    this.phone = address;
  }
  get phone() {
    return this._phone;
  }
  // this is the way to make the setter function
  set phone(phone) {
    const phoneNormalized = phone.replace(/[^0-9]/g, "");
    this.phone = phoneNormalized;
  }
}
const ernie = new Dog("Ernie", 1, "pug");
const vera = new Dog("Vera", 8, "Border Collie");
const scofield = new Dog("Scofeild", 6, "Doberman");
const edel = new Dog("Edel", 7, "German Shorthaired Pointer");

vera.bark();

ernie.owner = new Owner("Gamaliel", "11540 Waterwell Ct");
ernie.owner.phone = "951-2222222";
