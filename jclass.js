class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age(x) {
    return x - this.year;
  }
}

const date = new Date();
let year = date.getFullYear();

const myCar = new Car("Tacoma", 2024);
document.getElementById("demo").innerHTML=
"My car is " + myCar.age(year) + " years old.";