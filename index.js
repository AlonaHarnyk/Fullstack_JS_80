// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     isPublic: false,
//     rating: 0,
//     data: {
//         a: 1,
//         b: {
//           test: 'test!!!',
//           test1: {
//             d: 10
//           }
//         },
//         c: 3
//     }
//   };

// const a = book.title
// console.log(a)
// console.log(book.genres)
// console.log(book.data.a)
// console.log(book.data.b.test)

// console.log(book['genres']);
// console.log(book[genres]); // error

// const x = 'author';

// // console.log(book['author']) //  "Bernard Cornwell"
// // console.log(book[x]) // "Bernard Cornwell"

// console.log(book.x) // undefined

// console.log(book['data']['a']) // 1

// console.log(book)

// book.isPublic = true;

// console.log(book)

// book.genres.push('tale')
// console.log(book)

// book.price = '10$'
// book['price'] = '10$'

// book.data['d'] = 'd'

// book.title = [book.title]

// book.x = {}
// book.x.y = 'test'

// console.log(book)


// ❗️❗️❗️ Скорочена форма запису при створенні об'єкта

// const name = "Генрі Сибола";
// const age = 45;

// const user = {
//   name: name,
//   age: age,
// };

// console.log(user)

// const user = {
//   name,
//   age,
// };

// console.log(user)

// console.log(user.name); // "Генрі Сибола"
// console.log(user.age); // 25


// ❗️❗️❗️ Протопитипне наслідування, for in

// const animal = {
//   legs: 4,
//   eyes: 2
// };

// // console.log(animal)

// const dog = Object.create(animal);

// // console.log(dog)

// dog.name = "Манго"

// console.log(dog); // {name: 'Манго'}
// console.log(dog.name); // 'Манго'
// console.log(dog.legs); // 4

// for (const a in dog) {
//   console.log(a)
// }

// for (const key in dog) {

//   console.log(dog.hasOwnProperty(key))
// if (dog.hasOwnProperty(key)) {
//     console.log(key)
// }
// }

// dog.eyeColor = 'grey';

// const keys = Object.keys(dog)
// console.log(keys)

// for (const item of keys) {
//   console.log(item)

// }

// // const values = Object.values(dog)
// // console.log(values)

// const entries = Object.entries(dog)
// console.log(entries)


// ❗️❗️❗️ Приклад з методами

// const student = {
//     name: 'Jhon',
//     email: 'jhon@gmail.com',
//     homeworkResults: [],
//     getName() {
//        return this.name
//     },
//     getEmail() {
//         console.log(this.email)
//     },
//     getHWResults() {
//         console.log(this.homeworkResults)
//     },
//     addHomeworkResults(topic, sucess) {
//     //   const item = {topic:topic, sucess:sucess}
//         const item = {topic, sucess}
//         this.homeworkResults.push(item)
//     }
// }

// // console.log(student.getName())
// // student.getEmail()
// // student.getHWResults()
// student.addHomeworkResults('HTML/CSS', true)
// student.getHWResults()
// student.addHomeworkResults('JS', true)
// student.getHWResults()


// ❗️❗️❗️ Задача

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "На березі спокійних вод",
//     author: "Роберт Шеклі",
//     rating: 8.51,
//   },
//   {
//     title: "Сон смішної людини",
//     author: "Федір Достоєвський",
//     rating: 7.75,
//   },
// ];

// const data = {};
// const keys = Object.keys(books[0]);
// console.log(keys);

// for (const key of keys) {
//   data[key] = [];
// }
// console.log(data);

// for (const key in data) {
//   for (let book of books) {
//     data[key].push(book[key]);
//   }
// }

// console.log(data)
