// const planets = ["Земля", "Марс", "Венера", "Юпітер"];

// const planetsInUpperCase = planets.map(planet => planet.toUpperCase());
// console.log(planetsInUpperCase); // ['ЗЕМЛЯ', 'МАРС', 'ВЕНЕРА', 'ЮПІТЕР']

const users = [
  {
    id: "701b29c3-b35d-4cf1-a5f6-8b12b29a5081",
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    skills: ["ipsum", "lorem"],
    gender: "male",
    age: 37,
  },
  {
    id: "7a3cbd18-57a1-4534-8e12-1caad921bda1",
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
    gender: "female",
    age: 34,
  },
  {
    id: "88beb2f3-e4c2-49f3-a0a0-ecf957a95af3",
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    skills: ["nulla", "anim", "proident", "ipsum", "elit"],
    gender: "male",
    age: 24,
  },
  {
    id: "249b6175-5c30-44c6-b154-f120923736f5",
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    skills: ["adipisicing", "irure", "velit"],
    gender: "female",
    age: 21,
  },
  {
    id: "334f8cb3-eb04-45e6-abf4-4935dd439b70",
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    skills: ["ex", "culpa", "nostrud"],
    gender: "male",
    age: 27,
  },
  {
    id: "150b00fb-dd82-427d-9faf-2879ea87c695",
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    skills: ["non", "amet", "ipsum"],
    gender: "male",
    age: 38,
  },
  {
    id: "e1bf46ab-7168-491e-925e-f01e21394812",
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    skills: ["lorem", "veniam", "culpa"],
    gender: "female",
    age: 39,
  },
];

// const ages1 = users.map(user => user.age)
// console.log(ages1)

// const ages2 = users.map(({ age}) => age)

// console.log(ages2)

// const students = [
//   { name: "Манго", courses: ["математика", "фізика"] },
//   { name: "Полі", courses: ["інформатика", "математика"] },
//   { name: "Ківі", courses: ["фізика", "біологія"] },
// ];

// const a = students.map(({ courses }) => courses)

// const b = a.flat()

// console.log(b)
// console.log(a)

// const courses = students.flatMap(({courses}) => courses);
// console.log(courses) // ['математика', 'фізика', 'інформатика', 'математика', 'фізика', 'біологія']

// const students = [
//   { name: "Манго", courses: ["математика", "фізика", [1, 2, [7, 8, [100, 700, [5, 10]]]]] },
//   { name: "Полі", courses: ["інформатика", "математика", [3, 4, [9, 10]]] },
//   { name: "Ківі", courses: ["фізика", "біологія", [5, 6]] },
// ];

// const courses = students.flatMap(({courses}) => courses);
// console.log(courses.flat())

// const a = students.map(({ courses }) => courses)

// console.log(a.flat(Infinity))

// const users1 = users.filter(({ balance }) => balance > 3000 )
// console.log(users1)

// const students = [
//   { name: "Манго", courses: ["математика", "фізика"] },
//   { name: "Полі", courses: ["інформатика", "математика"] },
//   { name: "Ківі", courses: ["фізика", "біологія"] },
// ];

// const allCourses = students.flatMap(student => student.courses);
// // ['математика', 'фізика', 'інформатика', 'математика', 'фізика', 'біологія'];
// console.log(allCourses)

// const uniqueCourses = allCourses.filter(
//   (course, index, array) => {
//   console.log('#iteration', index + 1)
//   console.log('index', index)
//   console.log(array.indexOf(course))
//   return array.indexOf(course) === index
//   }
// );

// const uniqueCourses = allCourses.filter(
//   (course, index, array) => array.indexOf(course) === index
// );

// console.log(uniqueCourses)

// const users2 = users.filter(({ name, balance }) => balance > 3000 && name[0] === "S")
// console.log(users2)

// const userFind = users.find(({ name, balance }) => balance > 3000 && name[0] === "S")
// console.log(userFind)

// const userFind = users.find(({ balance }) => balance > 3000 )
// console.log(userFind)

// console.log(users.indexOf(userFind))

// const index = users.findIndex(({  balance }) => balance > 3000 )
// console.log(index)

// const result1 = users.every(({ balance }) => balance > 1000)
// const result2 = users.every(({age}) => age >= 20 && age <=30)

// console.log(result2)

// const result3 = users.some(({ eyeColor }) => eyeColor === 'green')
// const result4 = users.some(({friends}) => friends.length > 5)
// console.log(result4)

// const total = [2, 7, 3, 14, 6].reduce((previousValue, number) => {
//   return previousValue + number;
// }, 0);

// console.log(total); // 32

// const array = [2, 7, 3, 14, 6]
// const init = 0
// const total = array.reduce((previousValue, number, index) => {
//   console.log('Iteration:', index + 1)
//   console.log('previousValue', previousValue)
//   console.log('number', number)
//   const res = previousValue + number;
//   console.log('res', res)
//   return res;
// }, init);

// console.log(total); // 32





