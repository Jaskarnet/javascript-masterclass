# 🚗 OOP Car Simulation – Coding Challenge Series

This project is part of the course **"The Complete JavaScript Course"** and focuses on key concepts of **Object-Oriented Programming (OOP)** in JavaScript, both with **constructor functions** and modern **ES6 classes**.

Through a series of challenges, we explore how to model real-world entities (like cars and electric vehicles) using **prototypes**, **inheritance**, **method chaining**, **getters/setters**, and **private class fields**.

---

## 📚 Challenges Overview

### 💡 Challenge #1 – Car via Constructor Function

Create a `Car` using a constructor function and add methods to `accelerate` and `brake`.

### 💡 Challenge #2 – ES6 Class Conversion

Rebuild the `Car` using ES6 class syntax. Add unit conversion via getter/setter for speed.

### 💡 Challenge #3 – Inheritance with EV (Electric Car)

Use constructor functions to implement an `EV` that inherits from `Car`. Override and extend methods to simulate electric car behavior.

### 💡 Challenge #4 – ES6 Class Inheritance & Encapsulation

Recreate the `EV` using class inheritance. Use **private fields**, **method chaining**, and explore **polymorphism**.

---

## 🧠 Concepts Practiced

- Constructor functions and prototype inheritance
- ES6 class syntax & inheritance with `extends` and `super`
- Method overriding (polymorphism)
- Encapsulation with private fields (`#`)
- Method chaining
- Getters and setters
- Functional vs. class-based OOP patterns

---

## 🔧 Challenge Highlights

### 🚘 Car (Constructor Function)

```js
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};
```

---

### 🆚 ES6 Class Version

```js
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    return this;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}
```

---

### 🔋 EV (Electric Car) – Constructor Pattern

```js
const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`
  );
};
```

---

### 🔐 EV Class with Private Fields & Chaining

```js
class EVCl extends CarCl {
  #charge;

  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} going at ${this.speed} km/h, with a charge of ${
        this.#charge
      }%`
    );
    return this;
  }
}
```

#### 🧪 Example Usage

```js
const rivian = new EVCl('Rivian', 120, 23);
rivian.accelerate().accelerate().brake().chargeBattery(50).accelerate();
```
