// ❗️❗️❗️ Spread

// const a = ['a', 'b', 'c'];
// const b = [1, 2, 3];
// const c = [[1, 2], 'qwe', 1234]
// const d = [...a, 100, 200, 300, ...b, ...c[0], c[1], c[2]];
// // const e = [a, b, c]

// console.log(d)

// const obj1 = {a: 1, b: 2};
// const obj2 = {c: 3, d: 4}
// const obj3 = {...obj1, ...obj2}
// console.log(obj3)

// const obj1 = {a: 1, b: 2};
// const obj2 = {a: 0, c: 3, d: 4}
// // const obj3 = {...obj2, ...obj1}
// const obj3 = {...obj2, ...obj1, a: 5, e: 9}
// console.log(obj3)

// ❗️❗️❗️ Rest

// function q(...otherArgs) {
//   console.log(otherArgs); // Масив інших аргументів
// }

// q(1, 2);
// q(1, 2, 3);
// q(1, 2, 3, 4, 5, 6, 7);

// function w(a, b, c, ...otherArgs) {

//   console.log(a);
//   console.log(b);
//   console.log(c);
//   console.log(otherArgs); // Масив інших аргументів

//   const array = [...otherArgs]
//   console.log(array)
// }
// // w(1, 2, 3);
// w(1, 2, 3, 4, 5, 6, 7);

// function isIncluded(num, ...array) {
//   console.log(array.includes(num))
//   console.log(array)
// }
// isIncluded(1, 2, 3, 5, 6, 8, 5)

// function isIncluded(...array) {
//   const newArray = array.slice(1)
//   console.log(newArray)
//   console.log(newArray.includes(array[0]))
// }
// isIncluded(1, 2, 3, 5, 6, 8, 5)

// function isIncluded(...array) {
//   console.log(array);
//   const num = array.pop();
//   console.log(array);
//   console.log(num);
//   console.log(array.includes(num));
// }
// isIncluded(5, 2, 3, 5, 6, 8, 10);

// ❗️❗️❗️ Деструктуризація

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
//   price: "3$",
//   coverImage: "bkjbkbh",
// };
// const { price, title, ...data } = book;

// console.log(book)
// console.log(price)
// console.log(data)

// const { author} = book;

// // console.log(book.author)
// // console.log(book['author'])
// // console.log(author)

// Деструктуризуємо

// const { title, author, isPublic, rating, coverImage = 'qwerty' } = book;

// console.log(coverImage)

// const { title, author, isPublic, rating: votes, coverImage, price='5$' } = book;
// console.log(rating)

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
// ];

// for (const book of books) {

// const {title, author, rating} = book
//   console.log(title);
//   console.log(author);
//   console.log(rating);
// }

// for (const {title, author, rating} of books) {
//   console.log(title);
//   console.log(author);
//   console.log(rating);
// }

// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//     a: {
//       b: 0,
//       c: {
//         d: "bkjbkjbnlkbklj",
//       },
//     },
//   },
// };

// const {
//   name,
//   tag,
//   stats: {
//     followers,
//     views,
//     likes,
//     a: {
//       b,
//       c: { d },
//     },
//   },
// } = user;

// console.log(d);
// console.log(followers)
// console.log(likes)

// const {
//   stats: {
//     a: {
//       c: { d },
//     },
//   },
// } = user;

// console.log(d);

// const rgb = [200, 255, 100];
// const [red, green, blue] = rgb;

// console.log(green)

// let a
// let b
// a = 5
// b = 10
// console.log(a)
// console.log(b)

// let a, b
// a = 5
// b = 10
// console.log(a)
// console.log(b)


// ❗️❗️❗️ Задача

// const car1 = {
//   brand: "BMW",
//   model: "700",
//   a: "red",
//   maxSpeed: 240,
//   isNew: true,
//   dimensions: {
//     weight: 2000,
//     height: 150,
//     length: 4.2,
//   },
// };

// const car2 = {
//   brand: "BMW",
//   model: "700",
//   a: "red",
//   maxSpeed: 240,
//   isNew: true,
//   dimensions: {
//     height: 150,
//     length: 4.2,
//   },
// };

// function createMessage(car) {
//   const message = `
//   Color: ${car.a}
//   Max speed: ${car.maxSpeed}
//   Is new: ${car.isNew}
//   Weight: ${car.dimensions.weight}
//   `;
//   console.log(message);
// }

// function createMessage({
//   dimensions: {
//     weight = 'No info',
//     height = "No info",
//     length = "No info"
//   },
//   a: color = 'No info',
//   maxSpeed = "No info",
//   isNew = "No info",

// }) {
//   const message = `
//   Color: ${color}
//   Max speed: ${maxSpeed}
//   Is new: ${isNew}
//   Weight: ${weight}
//   `;
//   console.log(message);
// }

// createMessage(car2);
