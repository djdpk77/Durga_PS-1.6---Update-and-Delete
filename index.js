const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

//Exercise 1
let students = [
  { id: 1, name: 'John', grade: 'B' },
  { id: 2, name: 'Emily', grade: 'C' },
  { id: 3, name: 'David', grade: 'A' },
];

for (i = 0; i < students.length; i++) {
  if (students[i].id === 2) {
    students[i].grade = 'A';
    break;
  }
}

console.log(students);

//Exercise 2
let products = [
  { id: 1, name: 'Laptop', price: 1000 },
  { id: 2, name: 'Monitor', price: 300 },
  { id: 3, name: 'Keyboard', price: 100 },
];

products = products.filter((product) => product.id != 3);
console.log(products);

//Exercise 3
let employees = [
  { id: 1, name: 'John', department: 'Engineering' },
  { id: 2, name: 'Eve', department: 'Sales' },
  { id: 3, name: 'Mark', department: 'Marketing' },
];

for (i = 0; i < employees.length; i++) {
  if (employees[i].id === 1) {
    employees[i].department = 'Human Resources';
    break;
  }
}

console.log(employees);

//Exercise 4
let books = [
  { id: 1, title: '1984', author: 'George Orwell' },
  { id: 2, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
  { id: 3, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
];

books = books.filter((book) => book.id != 2);

console.log(books);

//Exercise 5
let cars = [
  { id: 1, make: 'Toyota', year: 2015 },
  { id: 2, make: 'Honda', year: 2008 },
  { id: 3, make: 'Tesla', year: 2020 },
];

for (i = 0; i < cars.length; i++) {
  if (cars[i].id === 3) {
    cars[i].year = 2021;
    break;
  }
}

console.log(cars);

//Exercise 6
let gadgets = [
  { id: 1, name: 'iPhone', brand: 'Apple' },
  { id: 2, name: 'Pixel', brand: 'Google' },
  { id: 3, name: 'Galaxy', brand: 'Samsung' },
];

gadgets = gadgets.filter((gadget) => gadget.id != 1);

console.log(gadgets);

//exercise 7
let projects = [
  { id: 1, name: 'Project Alpha', duration: 12 },
  { id: 2, name: 'Project Beta', duration: 10 },
  { id: 3, name: 'Project Gamma', duration: 8 },
];

for (i = 0; i < projects.length; i++) {
  if (projects[i].id === 1) {
    projects[i].duration = 14;
    break;
  }
}

console.log(projects);

//exercise 8
let restaurants = [
  { id: 1, name: 'Pasta Palace', cuisine: 'Italian' },
  { id: 2, name: 'Dragon Wok', cuisine: 'Chinese' },
  { id: 3, name: 'Burger Barn', cuisine: 'American' },
];

restaurants = restaurants.filter((restaurant) => restaurant.id != 2);

console.log(restaurants);

//Exercise 9
let athletes = [
  { id: 1, name: 'John', score: 85 },
  { id: 2, name: 'Mike', score: 92 },
  { id: 3, name: 'Sara', score: 88 },
];

for (i = 0; i < athletes.length; i++) {
  if (athletes[i].id === 2) {
    athletes[i].score = 95;
    break;
  }
}

console.log(athletes);

//Exercise 10
let movies = [
  { id: 1, title: 'Inception', rating: 8.8 },
  { id: 2, title: 'Titanic', rating: 7.8 },
  { id: 3, title: 'The Room', rating: 3.7 },
];

movies = movies.filter((movie) => movie.id != 3);

console.log(movies);

//Exercise 11
let cities = [
  { id: 1, name: 'Los Angeles', population: 4000000 },
  { id: 2, name: 'New York', population: 8175133 },
  { id: 3, name: 'Chicago', population: 2695598 },
];

for (i = 0; i < cities.length; i++) {
  if (cities[i].id === 3) {
    cities[i].population = 8500000;
    break;
  }
}

console.log(cities);

//Exercise 12
let courses = [
  { id: 1, title: 'Mathematics', duration: '3 months' },
  { id: 2, title: 'Physics', duration: '4 months' },
  { id: 3, title: 'Chemistry', duration: '5 months' },
];

courses = courses.filter((course) => course.id != 1);

console.log(courses);

//Exercise 13
let pets = [
  { id: 1, name: 'Whiskers', type: 'Cat' },
  { id: 2, name: 'Rover', type: 'Fish' },
  { id: 3, name: 'Bella', type: 'Dog' },
];

for (i = 0; i < pets.length; i++) {
  if (pets[i].id === 2) {
    pets[i].type = 'Dog';
    break;
  }
}

console.log(pets);

//Exercise 14
let computers = [
  { id: 1, brand: 'Apple', model: 'MacBook Pro' },
  { id: 2, brand: 'Dell', model: 'XPS 13' },
  { id: 3, brand: 'HP', model: 'Spectre x360' },
];

computers = computers.filter((computer) => computer.id != 3);

console.log(computers);

//Exercise 15
let appliances = [
  { id: 1, name: 'Microwave', wattage: 1000 },
  { id: 2, name: 'Toaster', wattage: 800 },
  { id: 3, name: 'Blender', wattage: 500 },
];

for (i = 0; i < appliances.length; i++) {
  if (appliances[i].id === 1) {
    appliances[i].wattage = 1200;
    break;
  }
}

console.log(appliances);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
